import React from 'react';
import * as THREE from 'three';

interface Props {
	model: THREE.Group;
}

const Step1: React.FC<Props> = ({model: ghostModel}) => {
	const onClickRetain = () => {
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
		// 处理选项B的逻辑
		console.log('选择了选项B');
	};

	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
			<h1 className="text-3xl font-bold">Ghost：</h1>
			<p className="text-xl">
				Do you think the data should be retained forever, or deleted when the
				task is completed?
			</p>
			<div className="flex gap-4 mt-4">
				<button
					onClick={onClickRetain}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Retain
				</button>
				<button
					onClick={onClickDelete}
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Step1;
