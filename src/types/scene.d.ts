type Scene = {
  group: THREE.Group,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  camera: THREE.Camera,
}

type MarkerCallback = (scene: Scene) => void;

type RegisterAnchor = (index: number, callback: MarkerCallback) => void;
