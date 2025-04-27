'use client';
import React, {useEffect, useMemo, useRef} from 'react';
import ARCanvas from './ARCanvas';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Info from './Info';
import {useMindAR} from '@/hooks/useMindAR';
import {setupTerminal, setupWhiteboard} from '@/scenes';
import {START_MARKER_ID, STEP1_MARKER_ID, STEP2_MARKER_ID} from '@/constants';

export default function ARPage() {
	const containerRef = useRef<HTMLDivElement>(null);

	const {loading, registerAnchor, markerStates, modelMap} =
		useMindAR(containerRef);

	useEffect(() => {
		setupWhiteboard(registerAnchor);
		setupTerminal(registerAnchor);
	}, []);

	const currentStep = useMemo(() => {
		const [id] = Array.from(markerStates).find(([, v]) => v) || [];

		return id;
	}, [markerStates]);

	const Step = () => {
		if (currentStep !== undefined) {
			const model = modelMap.get(currentStep)!;

			switch (currentStep) {
				case START_MARKER_ID:
					return <Step0 model={model} />;
				case STEP1_MARKER_ID:
					return <Step1 model={model} />;
				case STEP2_MARKER_ID:
					return <Step2 model={model} />;
				default:
					return null;
			}
		}
		return null;
	};

	return (
		<>
			<ARCanvas containerRef={containerRef} loading={loading} />
			<div className="absolute top-10 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
				Please use landscape mode on your phone
			</div>
			<Info step={currentStep} />
			<Step />
		</>
	);
}
