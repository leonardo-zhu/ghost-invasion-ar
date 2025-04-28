import React, {useState} from 'react';
import {Input} from 'antd';
import {UNIQUE_CODE} from '@/constants';

const {OTP} = Input;

interface Props {
	model: THREE.Group | undefined;
}

const Step3: React.FC<Props> = () => {
	const [isSuccess, setIsSuccess] = useState(false);
	const onChange = (value: string) => {
		if (value === UNIQUE_CODE) {
			setIsSuccess(true);
		}
	};

	if (isSuccess) {
		// Memory upload success, thank you for your help
		return (
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
				<h1 className="text-3xl font-bold">👻 Ghost：</h1>
				<p className="text-xl animate-pulse font-bold">
					Thank you for your help! My memory has been successfully uploaded to
					the cloud.
				</p>
			</div>
		);
	}
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
			<h1 className="text-3xl font-bold">👻 Ghost：</h1>
			<p className="text-xl animate-pulse font-bold">
				Do you want to upload my memory to the cloud and restore my reputation?
				Or... permanently shut down this system?
			</p>
			<div className="flex justify-center items-center">
				<OTP
					onChange={onChange}
					length={8}
					formatter={(str) => str.toUpperCase()}
					separator={(i) => <span>{i === 3 ? '–' : ''}</span>}
				/>
			</div>
		</div>
	);
};

export default Step3;
