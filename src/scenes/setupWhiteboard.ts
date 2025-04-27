import createGhostScene from './createGhostScene';
import {addClickListener} from './events';
import {START_MARKER_ID} from '@/constants';

const setupWhiteboard = (registerAnchor: RegisterAnchor) => {
	registerAnchor(START_MARKER_ID, async (scene) => {
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
	});
};

export default setupWhiteboard;
