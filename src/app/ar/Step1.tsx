import React from 'react';
import * as THREE from 'three';
import useTypeWriter from '@/hooks/useTypeWriter';
import {useGlobalContext} from '@/app/contexts/GlobalContext';
import {Button} from 'antd';

interface Props {
	model: THREE.Group;
}

const ghostAudioSrc = '/audio/step1-ghost-voice.mp3';

const title =
	'Do you think the data should be retained forever, or deleted when the task is completed?';

const Step1: React.FC<Props> = ({model: ghostModel}) => {
	const {updateContext} = useGlobalContext();
	const displayedTitle = useTypeWriter(title);

	const onClickRetain = () => {
		updateContext('isRetainedData', true);

		ghostModel.traverse((obj: any) => {
			if (obj.isMesh && obj.material) {
				obj.material.color.setRGB(1, 0.2, 0.2);
				obj.material.emissive?.setRGB(1, 0, 0);
				obj.material.emissiveIntensity = 0.5;
			}
		});

		const startY = ghostModel.position.y;
		const duration = 500; // ms
		const peak = startY + 0.5;
		const start = performance.now();
		const animate = (t: number) => {
			const elapsed = t - start;
			const ratio = Math.min(elapsed / duration, 1);

			ghostModel.position.y =
				startY + Math.sin(Math.PI * ratio) * (peak - startY);
			if (ratio < 1) requestAnimationFrame(animate);
		};
		requestAnimationFrame(animate);
	};

	const onClickDelete = () => {
		updateContext('isRetainedData', false);
	};

	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
			<audio autoPlay src={ghostAudioSrc} preload="atuo" />
			<h1 className="text-3xl font-bold">👻 Ghost：</h1>
			<p className="text-xl">{displayedTitle}</p>
			{displayedTitle === title && (
				<div className="flex gap-4 mt-4">
					<Button type="primary" onClick={onClickRetain}>
						Retain
					</Button>
					<Button onClick={onClickDelete} type="primary" danger>
						Delete
					</Button>
				</div>
			)}
		</div>
	);
};

export default Step1;
