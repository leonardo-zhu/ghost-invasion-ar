'use client';
import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useCallback,
} from 'react';

type Context = {
	isRetainedData: boolean;
	uniqueCode?: string;
};

type UpdateContext = <K extends keyof Context>(
	key: K,
	value: Context[K],
) => void;

interface GlobalContextType {
	context: Context;
	updateContext: UpdateContext;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
	children: ReactNode;
}

const initialContext: Context = {
	// Initialize with default values if needed
	isRetainedData: false,
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({children}) => {
	const [context, setContext] = useState<Context>(initialContext);

	const updateContext: UpdateContext = useCallback(
		(key, value) =>
			setContext((context) => ({
				...context,
				[key]: value,
			})),
		[],
	);

	return (
		<GlobalContext.Provider value={{context, updateContext}}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = (): GlobalContextType => {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error('useGlobalContext must be used within a GlobalProvider');
	}
	return context;
};
