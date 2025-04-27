import createGhostScene from "./createGhostScene";
import { addClickListener } from "./events";
import { START_MARKER_ID } from "@/constants";

const setupWhiteboard = (registerAnchor: RegisterAnchor, setMessage: (message: string) => void) => {
  registerAnchor(START_MARKER_ID, async (scene) => {
    const model = await createGhostScene(scene);

    const { renderer, camera } = scene;

    addClickListener({
      model,
      camera,
      canvas: renderer.domElement,
    }, () => {
      setMessage("🖥️ 电脑 marker 点击成功");
    })
  })
}


export default setupWhiteboard;
