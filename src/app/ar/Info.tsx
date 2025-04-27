import React from 'react';
import {STEP1_MARKER_ID, STEP2_MARKER_ID, STEP3_MARKER_ID} from '@/constants';

interface Props {
	step?: number;
}

const Info: React.FC<Props> = (props) => {
	const {step} = props;

	console.log('step', step);

	let tips: string | undefined = undefined;

	if (step === STEP1_MARKER_ID) {
		tips = 'Level 1: Unlocking the computer terminal';
	} else if (step === STEP2_MARKER_ID) {
		tips = 'Level 2: Finding the Encryption Key';
	} else if (step === STEP3_MARKER_ID) {
		tips = 'Level 3: Final decision-making';
	}

	return (
		<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
			{tips}
		</div>
	);
};

export default Info;
