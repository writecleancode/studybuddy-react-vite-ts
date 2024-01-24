import { FormEvent, useReducer } from 'react';

type stateType = {
	name: string;
	attendance: string;
	average: string;
	consent: boolean;
	error: string;
};

const initialFormState = {
	name: '',
	attendance: '',
	average: '',
	consent: false,
	error: '',
};

const actionTypes = {
	inputChange: 'INPUT CHANGE',
	clearValues: 'CLEAR VALUES',
	toggleConsent: 'TOGGLE CONSENT',
	throwError: 'THROW ERROR',
};

const reducer = (state: stateType, action: Record<string, string>) => {
	switch (action.type) {
		case actionTypes.inputChange:
			return {
				...state,
				[action.field]: action.value,
			};
		case actionTypes.clearValues:
			return initialFormState;
		case actionTypes.toggleConsent:
			return {
				...state,
				consent: !state.consent,
			};
		case actionTypes.throwError:
			return {
				...state,
				error: action.errorValue,
			};
		default:
			return state;
	}
};

export const useForm = () => {
	const [formValues, dispatch] = useReducer(reducer, initialFormState);

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		dispatch({ type: actionTypes.inputChange, field: e.currentTarget.name, value: e.currentTarget.value });
	};

	const handleClearFormValues = () => {
		dispatch({ type: actionTypes.clearValues });
	};

	const handleConsentToggle = () => {
		dispatch({ type: actionTypes.toggleConsent });
	};

	const handleThrowError = (errorMessage: string) => {
		dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
	};

	return {
		formValues,
		handleInputChange,
		handleClearFormValues,
		handleConsentToggle,
		handleThrowError,
	};
};
