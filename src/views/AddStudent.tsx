import { FormEvent, useContext } from 'react';
import { useForm } from 'src/hooks/useForm';
import { StudentsContext } from 'src/providers/StudentsProvider';
import { ViewWrapper } from 'src/components/molecules/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';

export const AddStudent = () => {
	const { formValues, handleInputChange, handleClearFormValues, handleConsentToggle, handleThrowError } = useForm();
	const { handleAddStudent } = useContext(StudentsContext);

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();
		if (formValues.consent) {
			handleAddStudent(formValues);
			handleClearFormValues();
		} else {
			handleThrowError('You need to give consent');
		}
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
