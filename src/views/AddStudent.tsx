import { FormEvent, useContext, useState } from 'react';
import { StudentsContext } from 'src/providers/StudentsProvider';
import { ViewWrapper } from 'src/components/molecules/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';

const initialFormValues = {
	name: '',
	attendance: '',
	average: '',
};

export const AddStudent = () => {
	const [formValues, setFormValues] = useState(initialFormValues);
	const { handleAddStudent } = useContext(StudentsContext);

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();
		handleAddStudent(formValues);
		setFormValues(initialFormValues);
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
			<Button type='submit'>Add</Button>
		</ViewWrapper>
	);
};
