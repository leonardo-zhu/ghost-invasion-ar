// src/lib/createScene.ts
import * as THREE from "three";

const createScene = (group: THREE.Group, scene: THREE.Scene) => {
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  );

  cube.rotation.x = -Math.PI / 2;

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);
  group.add(cube);

  return cube;
};

export default createScene;
