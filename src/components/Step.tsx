import React, {createContext, useContext, useEffect, useState} from 'react';

type StepContextType = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider: React.FC<{
	children: React.ReactNode;
	externalStep?: number;
}> = ({children, externalStep = -1}) => {
	const [step, setStep] = useState<number>(-1);

	useEffect(() => {
		setStep(externalStep);
	}, [externalStep]);

	return (
		<StepContext.Provider value={{step, setStep}}>
			{children}
		</StepContext.Provider>
	);
};

export const useStep = () => {
	const context = useContext(StepContext);
	if (!context) {
		throw new Error('useStep 必须在 StepProvider 内部使用');
	}
	return context;
};

export default StepProvider;
