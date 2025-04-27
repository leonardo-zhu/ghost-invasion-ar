import {STEP1_MARKER_ID} from '@/constants';

const setupTerminal = (registerAnchor: RegisterAnchor) => {
	registerAnchor(STEP1_MARKER_ID, async (scene) => {});
};

export default setupTerminal;
