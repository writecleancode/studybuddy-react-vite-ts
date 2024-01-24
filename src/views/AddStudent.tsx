import { FormEvent, useContext, useReducer } from 'react';
import { StudentsContext } from 'src/providers/StudentsProvider';
import { ViewWrapper } from 'src/components/molecules/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';

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

export const AddStudent = () => {
	const [formValues, dispatch] = useReducer(reducer, initialFormState);
	const { handleAddStudent } = useContext(StudentsContext);

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		dispatch({ type: actionTypes.inputChange, field: e.currentTarget.name, value: e.currentTarget.value });
	};

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();
		if (formValues.consent) {
			dispatch({ type: actionTypes.clearValues });
			handleAddStudent(formValues);
		} else {
			handleThrowError('You need to give consent');
		}
	};

	const handleConsentToggle = () => {
		dispatch({ type: actionTypes.toggleConsent });
	};

	const handleThrowError = (errorMessage: string) => {
		dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
	};

	return (
		<ViewWrapper as='form' onSubmit={handleSubmitForm}>
			<StyledTitle>Add new student</StyledTitle>
			<FormField label='Name' name='name' id='name' value={formValues.name} onChange={handleInputChange} />
			<FormField
				label='Attendance'
				name='attendance'
				id='attendance'
				value={formValues.attendance}
				onChange={handleInputChange}
			/>
			<FormField label='Average' name='average' id='average' value={formValues.average} onChange={handleInputChange} />
			<FormField
				label='Consent'
				name='consent'
				id='consent'
				type='checkbox'
				checked={formValues.consent}
				onChange={handleConsentToggle}
			/>
			<Button type='submit'>Add</Button>
			{formValues.error ? <p>{formValues.error}</p> : null}
		</ViewWrapper>
	);
};
