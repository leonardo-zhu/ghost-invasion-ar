import * as THREE from 'three';

interface EventArgs {
	canvas: HTMLCanvasElement;
	model: THREE.Group;
	camera: THREE.Camera;
}

type ClickCallback = () => void;

export const addClickListener = (
	args: EventArgs,
	callback: ClickCallback = () => {},
) => {
	const raycaster = new THREE.Raycaster();
	const pointer = new THREE.Vector2();

	const {canvas, camera, model} = args;
	canvas.addEventListener('click', (event) => {
		const bounds = canvas.getBoundingClientRect();
		pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
		pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

		raycaster.setFromCamera(pointer, camera);
		const intersects = raycaster.intersectObject(model, true);

		if (intersects.length > 0) {
			callback();
		}
	});
};
