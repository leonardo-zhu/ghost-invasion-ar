import React, {useState} from 'react';
import {UNIQUE_CODE} from '@/constants';
import {useGlobalContext} from '@/app/contexts/GlobalContext';
import {Button} from 'antd';

interface Props {
	model: THREE.Group | undefined;
}

const Step2: React.FC<Props> = () => {
	const {updateContext} = useGlobalContext();

	const [isGetClip, setIsGetClip] = useState(false);

	const onClickGetClip = () => {
		// set the clipboard to the unique code
		navigator.clipboard.writeText(UNIQUE_CODE).then(
			() => {
				updateContext('uniqueCode', UNIQUE_CODE);
				setIsGetClip(true);
				console.log('Clipboard set successfully');
			},
			(err) => {
				console.error('Failed to set clipboard: ', err);
			},
		);
	};

	if (isGetClip) {
		return (
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
				<h1 className="text-3xl font-bold">👻 Ghost：</h1>
				<p className="text-xl animate-pulse text-amber-300 font-bold">
					You have already obtained the clip of the code
				</p>
			</div>
		);
	}

	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
			<h1 className="text-3xl font-bold">👻 Ghost：</h1>
			<p className="text-xl animate-pulse font-bold">
				You only have 1 chance to get the clip, so be careful!
			</p>
			<div className="flex gap-4 mt-4">
				<Button type="primary" onClick={onClickGetClip}>
					Clip!
				</Button>
			</div>
		</div>
	);
};

export default Step2;
