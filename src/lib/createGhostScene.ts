// src/lib/createGhostScene.ts
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";


const createGhostScene = (group: THREE.Group, scene: THREE.Scene) => {
  const loader = new GLTFLoader();

  // 添加光照
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  loader.load("/ghost.glb", (gltf) => {
    const model = gltf.scene;

    model.scale.set(0.5, 0.5, 0.5); // 缩小
    model.position.set(0, 0, 0); // 居中

    group.add(model);
  });

  // 返回一个占位 cube 避免报错（animationLoop 仍需要返回值）
  const placeholder = new THREE.Mesh();
  return placeholder;
};

export default createGhostScene;
