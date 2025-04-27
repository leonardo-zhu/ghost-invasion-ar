// src/lib/createCodeScene.ts
import * as THREE from 'three';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js';
import {UNIQUE_CODE} from '@/constants';

const createCodeScene = (args: Scene): Promise<THREE.Group> => {
	const {scene, group} = args;
	return new Promise((resolve) => {
		const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
		scene.add(light);

		const loader = new FontLoader();
		loader.load('/helvetiker_regular.typeface.json', (font) => {
			const geometry = new TextGeometry(UNIQUE_CODE, {
				font: font,
				size: 0.3,
				height: 0.2,
				curveSegments: 12,
				bevelEnabled: true,
				bevelThickness: 0.03,
				bevelSize: 0.02,
				bevelSegments: 5,
			});

			geometry.center();

			const material = new THREE.MeshStandardMaterial({
				color: 0x808080,
				metalness: 0.6,
				roughness: 0.3,
				transparent: true,
				opacity: 0.6,
			});

			const textMesh = new THREE.Mesh(geometry, material);
			textMesh.rotation.x = 0;
			textMesh.rotation.y = 0;
			textMesh.rotation.z = 0;

			group.add(textMesh);
			resolve(group);
		});
	});
};

export default createCodeScene;
