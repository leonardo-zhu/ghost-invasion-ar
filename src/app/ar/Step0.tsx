import React, {useRef, useState} from 'react';
import useTypeWriter from '@/hooks/useTypeWriter';
import {Button, Space} from 'antd';
import {RightOutlined} from '@ant-design/icons';

const ghostAudioSrc = '/audio/step0-ghost-voice.mp3';

interface Props {
	model: THREE.Group | undefined;
}

const Step0: React.FC<Props> = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [showText, setShowText] = useState(false);
	const displayedText = useTypeWriter(
		"👻 You're late... This data should not have been discovered...",
		60,
		{start: showText},
	);

	return (
		<>
			<audio ref={audioRef} src={ghostAudioSrc} />
			{!showText && (
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
					<Space>
						<p>Welcome to A32 lab, data security check system starting...</p>
						<Button
							shape="circle"
							icon={<RightOutlined />}
							onClick={() => {
								audioRef.current?.play();
								setShowText(true);
							}}
						/>
					</Space>
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
