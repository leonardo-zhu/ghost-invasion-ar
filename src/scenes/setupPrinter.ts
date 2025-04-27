import {STEP2_MARKER_ID} from '@/constants';
import createCodeScene from './createCodeScene';
import {addClickListener} from './events';

const setupTerminal = (registerAnchor: RegisterAnchor) => {
	registerAnchor(STEP2_MARKER_ID, async (scene) => {
		const model = await createCodeScene(scene);

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
