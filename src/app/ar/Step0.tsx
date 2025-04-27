import React, {useEffect, useRef, useState} from 'react';
import useTypeWriter from '@/hooks/useTypeWriter';

const ghostAudioSrc = '/audio/step0-ghost-voice.mp3';

interface Props {
	model: THREE.Group | undefined;
}

const delay = 2000; // 2 seconds

const Step0: React.FC<Props> = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [showText, setShowText] = useState(false);
	const displayedText = useTypeWriter(
		"👻 You're late... This data should not have been discovered...",
		60,
		delay,
	);

	useEffect(() => {
		const startTimer = setTimeout(() => {
			audioRef.current?.play();
			setShowText(true);
			// typewriter effect
		}, delay);
		return () => clearTimeout(startTimer);
	}, []);

	return (
		<>
			<audio ref={audioRef} src={ghostAudioSrc} preload="atuo" />
			{!showText && (
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
					Welcome to A32 lab, data security check system starting...
				</div>
			)}
			{showText && (
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
					{displayedText}
				</div>
			)}
		</>
	);
};

export default Step0;
