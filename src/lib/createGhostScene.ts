// src/lib/createGhostScene.ts
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

const createGhostScene = (
  group: THREE.Group,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  camera: THREE.Camera,
) => {
  const loader = new GLTFLoader();

  // 添加光照
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  loader.load("/ghost.glb", (gltf) => {
    const model = gltf.scene;

    model.scale.set(0.5, 0.5, 0.5); // 缩小
    model.position.set(0, 0, 0); // 居中

    group.add(model);

    const canvas = renderer.domElement

    // 设置 canvas 的样式
    setCanvasStyle(canvas);

    // 添加点击事件监听器
    addClickListener(canvas, model, camera);
  });

  // 返回一个占位 cube 避免报错（animationLoop 仍需要返回值）
  const placeholder = new THREE.Mesh();
  return placeholder;
};

const setCanvasStyle = (canvas: HTMLCanvasElement) => {

  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.zIndex = "1000";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";

  return canvas;
}

const addClickListener = (canvas: HTMLCanvasElement, model: THREE.Group, camera: THREE.Camera) => {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  canvas.addEventListener("click", (event) => {
    const bounds = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(model, true);

    if (intersects.length > 0) {
      // message.error("你点击到了鬼魂 👻！");
    }
  });

}
export default createGhostScene;
