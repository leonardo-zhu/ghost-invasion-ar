type Scene = {
	group: THREE.Group;
	scene: THREE.Scene;
	renderer: THREE.WebGLRenderer;
	camera: THREE.Camera;
};

type MarkerCallback = (scene: Scene) => Promise<THREE.Group>;

type RegisterAnchor = (index: number, callback: MarkerCallback) => void;
