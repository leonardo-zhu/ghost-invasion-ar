import {RefObject, useCallback, useEffect, useRef, useState} from 'react';
import type {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';

export const useMindAR = (ref: RefObject<HTMLDivElement | null>) => {
	const [loading, setLoading] = useState(true);
	const [markerStates, setMarkerStates] = useState<Map<number, boolean>>(
		new Map(),
	);

	const callbackMap = useRef<Map<number, MarkerCallback>>(new Map());

	const mindarThree = useRef<MindARThree | null>(null);

	const registerAnchor = useCallback<RegisterAnchor>(
		(index, callback) => {
			callbackMap.current.set(index, callback);
		},
		[callbackMap],
	);

	useEffect(() => {
		const container = ref?.current;

		if (!container) return;

		const start = async () => {
			const {MindARThree} = await import(
				'mind-ar/dist/mindar-image-three.prod.js'
			);

			mindarThree.current = new MindARThree({
				container,
				imageTargetSrc: '/targets.mind',
			});

			const {renderer, scene, camera} = mindarThree.current;

			// 设置 canvas 样式（保证全屏）
			Object.assign(renderer.domElement.style, {
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100vw',
				height: '100vh',
				zIndex: '1000',
			});

			await mindarThree.current.start();

			renderer.setAnimationLoop(() => {
				renderer.render(scene, camera);
			});
		};

		start().then(() => setLoading(false));
	}, [ref]);

	useEffect(() => {
		if (!loading && mindarThree.current) {
			const {renderer, scene, camera} = mindarThree.current;

			for (const [key, cb] of callbackMap.current) {
				const anchor = mindarThree.current.addAnchor(key);

				cb({
					scene,
					group: anchor.group,
					renderer,
					camera,
				});

				anchor.onTargetFound = () => {
					// 目标被找到
					setMarkerStates((pre) => new Map(pre).set(key, true));
				};

				anchor.onTargetLost = () => {
					setMarkerStates((pre) => new Map(pre).set(key, false));
				};
			}
		}
	}, [loading, mindarThree, callbackMap]);

	return {
		loading,
		markerStates,
		registerAnchor,
	};
};
