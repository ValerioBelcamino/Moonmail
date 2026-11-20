"""Export the viewer's actual articulated models and its continuous grid poses for Blender."""

import argparse
import base64
import json
from pathlib import Path

from playwright.sync_api import sync_playwright


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", type=Path)
    parser.add_argument("--server", default="http://127.0.0.1:5187")
    args = parser.parse_args()
    args.directory.mkdir(exist_ok=True, parents=True)
    with sync_playwright() as pw:
        chrome = next(
            Path.home().glob(".cache/ms-playwright/chromium-*/chrome-linux64/chrome"),
            None,
        )
        browser = pw.chromium.launch(
            executable_path=str(chrome) if chrome else None,
            args=["--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
        )
        page = browser.new_page()
        page.route(
            "**/model-export",
            lambda route: route.fulfill(
                content_type="text/html",
                body='<div id="studio" style="width:640px;height:480px"></div>',
            ),
        )
        page.goto(args.server + "/model-export")
        page.evaluate(
            """async (frames) => {
          const {Depot} = await import('/src/scene.ts');
          const {GLTFExporter} = await import('/node_modules/three/examples/jsm/exporters/GLTFExporter.js');
          const T = await import('/node_modules/three/build/three.module.js');
          const depot = new Depot(document.getElementById('studio'));
          depot.renderer.render = () => {};
          const episode = async name => (await fetch('/api/recordings/'+name)).json();
          depot.load(await episode('post'));
          const armParts = (arm) => Object.fromEntries([
            ...arm.links.map((o,i)=>['link'+i,o]), ...arm.joints.map((o,i)=>['joint'+i,o]),
            ...arm.fingers.map((o,i)=>['finger'+i,o]), ['hand',arm.hand]
          ]);
          const models = {Coach:depot.train, Mailbag:depot.mailbag};
          for (const [id, rig] of Object.entries(depot.rigs)) {
            models[id] = rig.body;
            if (rig.arm) for (const [k,o] of Object.entries(armParts(rig.arm))) o.name=id+'_'+k;
            for (const [i, wheel] of rig.wheels.entries()) wheel.spin.name = id+'_wheel_'+i;
            if (rig.fork) rig.fork.name = 'Jack_forks';
            if (rig.mast) rig.mast.name = 'Jack_mast';
          }
          for (const [i,w] of depot.rail.entries()) w.spin.name = 'Coach_wheel_'+i;
          window.exportModel = async id => {
            const obj = models[id].clone(true);
            obj.position.set(0,0,0); obj.rotation.set(0,0,0); obj.scale.set(1,1,1);
            obj.name = id;
            obj.traverse(o => {
              if (!o.isMesh) return;
              const m=o.material;
              if (m.transparent && m.vertexColors || m.map) { o.visible=false; return; }
              if (!m.isMeshStandardMaterial) o.material = new T.MeshStandardMaterial({
                color:m.color, vertexColors:m.vertexColors, side:m.side, roughness:0.69
              });
            });
            const data = await new GLTFExporter().parseAsync(obj, {binary:true});
            return await new Promise(resolve => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result.split(',')[1]); reader.readAsDataURL(new Blob([data]));
            });
          };
          window.postMotion = async () => {
            const ep=await episode('post'); depot.load(ep);
            const perTick=24;
            const local=o=>[...o.position.toArray(),...o.quaternion.toArray()];
            // Sample the same drive, end effectors and custody transfers as interactive playback.
            // The Blender camera follows its own continuous track on this set.
            const samples=Array.from({length:(ep.frames.length-1)*perTick+1},(_,i)=>{
              const tick=i/perTick; depot.draw(tick);
              const robots=Object.fromEntries(Object.entries(depot.rigs).map(([id,rig])=>{
                const {x,yaw,z,distance}=depot.drive.sample(id,tick);
                const joints=rig.arm ? armParts(rig.arm) : {};
                if(rig.mast) Object.assign(joints,{mast:rig.mast,forks:rig.fork});
                return [id,{x,yaw,z,distance,scale:rig.body.scale.x,
                  joints:Object.fromEntries(Object.entries(joints).map(([name,o])=>[name,local(o)]))}];
              }));
              return {robots,bag:depot.mailbag.position.toArray(),
                collar:depot.rigs.Jack.collar.getWorldPosition(new T.Vector3()).toArray()};
            });
            return {perTick,samples};
          };
          window.yardMotion = async () => {
            const ep=await episode('yard'); depot.load(ep);
            const yard=depot.junction;
            // Evaluate the normal playback at the exact exposure time of each film frame.
            return Array.from({length: frames}, (_,frame)=>{
              const u=Math.max(0,Math.min(1,(frame/60-3.2)/(14.85-3.2)));
              const tick=6.8*u*u*u*(u*(u*6-15)+10);
              yard.draw(tick,depot.camera,1.6,false);
              const robots=Object.fromEntries(Array.from(yard.robots,([id,rig])=>{
                const p=yard.drive.sample(id,tick);
                if (ep.layout.yard.bodies[id]==='Wick') p.arm=Object.fromEntries(
                  Object.entries(armParts(rig.arm)).map(([k,o])=>[k,[...o.position.toArray(),...o.quaternion.toArray()]]));
                return [id,p];
              }));
              const bags=Object.fromEntries(Array.from(yard.bags,([id,bag])=>[id,bag.position.toArray()]));
              return {tick,robots,bags};
            });
          };
        }""",
            json.loads(
                Path(__file__).with_name("cuts.json").read_text(encoding="utf-8")
            )["travel"]["frames"],
        )
        for name in ("Jack", "Skim", "Wick", "Patch", "Coach", "Mailbag"):
            encoded = page.evaluate("(name)=>window.exportModel(name)", name)
            (args.directory / (name + ".glb")).write_bytes(base64.b64decode(encoded))
        (args.directory / "drive.json").write_text(
            json.dumps(page.evaluate("window.yardMotion()"))
        )
        (args.directory / "post-motion.json").write_text(
            json.dumps(page.evaluate("window.postMotion()"), separators=(",", ":"))
        )
        browser.close()


if __name__ == "__main__":
    main()
