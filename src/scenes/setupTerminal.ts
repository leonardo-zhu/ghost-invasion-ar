import {STEP1_MARKER_ID} from '@/constants';
import createGhostScene from './createGhostScene';
import {addClickListener} from './events';

const setupTerminal = (registerAnchor: RegisterAnchor) => {
	registerAnchor(STEP1_MARKER_ID, async (scene) => {
		const model = await createGhostScene(scene);

		const {renderer, camera} = scene;

		addClickListener(
			{
				model,
				camera,
				canvas: renderer.domElement,
			},
			() => {},
		);

		return model;
	});
};

export default setupTerminal;
