// src/lib/createGhostScene.ts
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

const createGhostScene = (
  args: Scene
): Promise<THREE.Group> => {

  const { scene, group } = args;
  return new Promise((resolve) => {
    const loader = new GLTFLoader();
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    loader.load("/ghost.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.5, 0.5, 0.5);
      model.position.set(0, 0, 0);
      group.add(model);
      resolve(model);
    });
  });
};


export default createGhostScene;
