import React, {useEffect, useRef, useState} from 'react';

const ghostAudioSrc = '/audio/step0-ghost-voice.mp3';

interface Props {
	model: THREE.Group | undefined;
}

const Step0: React.FC<Props> = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [showText, setShowText] = useState(false);
	const fullText =
		"👻 You're late... This data should not have been discovered...";
	const [displayedText, setDisplayedText] = useState('');

	useEffect(() => {
		const startTimer = setTimeout(() => {
			audioRef.current?.play();
			setShowText(true);
			// typewriter effect
			fullText.split('').forEach((char, idx) => {
				setTimeout(() => {
					setDisplayedText((prev) => prev + char);
				}, idx * 60);
			});
		}, 2000);
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
