import React from 'react';
import {Input} from 'antd';
import {UNIQUE_CODE} from '@/constants';

const {OTP} = Input;

interface Props {
	model: THREE.Group | undefined;
}

const Step3: React.FC<Props> = () => {
	/**
	 *
	 * 幽灵出现完整形态（一个数字模型或轮廓），请求帮助恢复名誉。
	 *
	 * 🗣️【幽灵】：“你能将我的记忆上传到云端，为我正名吗？还是……永远关闭这个系统？”
	 *
	 * 玩家做出最后选择：
	 * 	•	上传 → 输入代码 -> 成功后，幽灵微笑消失，实验室恢复正常。
	 * 	•	删除 → 幽灵留下最后一句：“也许这是对的……” 画面渐暗。
	 */

	const onChange = (value: string) => {
		if (value === UNIQUE_CODE) {
		}
	};
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
