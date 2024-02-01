import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

type ErrorContextType = {
	error: string;
	dispatchError: (message: string) => void;
};

type ErrorProviderProps = {
	children: ReactNode;
};

export const ErrorContext = createContext<ErrorContextType>({
	error: '',
	dispatchError: () => {},
});

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
	const [error, setError] = useState('');

	const dispatchError = useCallback(
		(message: string) => {
			setError(message);

			if (error) return;
			setTimeout(() => {
				setError('');
			}, 7000);
		},
		[error]
	);

	return (
		<ErrorContext.Provider
			value={{
				error,
				dispatchError,
			}}>
			{children}
		</ErrorContext.Provider>
	);
};

export const useError = () => {
	const errorContext = useContext(ErrorContext);

	if (!Object.keys(errorContext).length) {
		throw Error('errorContext needs to be used inside ErrorProvider');
	}

	return errorContext;
};
