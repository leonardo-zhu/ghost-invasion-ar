import React, {useState} from 'react';
import {Alert, Input, Space, Spin} from 'antd';
import {UNIQUE_CODE} from '@/constants';

const {OTP} = Input;

interface Props {
	model: THREE.Group | undefined;
}

const Step3: React.FC<Props> = ({model}) => {
	const [isSuccess, setIsSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const onChange = (value: string) => {
		if (value.length === 8) {
			setLoading(true);

			new Promise<boolean>((resolve) => {
				setTimeout(() => {
					if (value === UNIQUE_CODE.replace(/–/g, '')) {
						resolve(true);
					}
					setLoading(false);
				}, 2000);
			}).then((value) => {
				setIsSuccess(value);
				if (model) model.visible = false;
			});
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
			<Spin spinning={loading}>
				<Space direction="vertical">
					<Alert
						type="info"
						message="Do you want to upload my memory to the cloud and restore my
								reputation? Or... permanently shut down this system?"
						description={
							<p className="text-xl animate-pulse font-bold">
								Please enter the correct 8-digit code to upload my memory.
							</p>
						}
					/>

					<div className="flex justify-center items-center">
						<OTP
							onChange={onChange}
							length={8}
							formatter={(str) => str.toUpperCase()}
							separator={(i) => <span>{i === 3 ? '–' : ''}</span>}
						/>
					</div>
				</Space>
			</Spin>
		</div>
	);
};

export default Step3;
