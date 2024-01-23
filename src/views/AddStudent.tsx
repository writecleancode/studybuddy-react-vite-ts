import { FormEvent } from 'react';
import { ViewWrapper } from 'src/components/molecules/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { StudentType } from 'src/views/Root';

type FormProps = {
	formValues: StudentType;
	handleInputChange: (e: FormEvent<HTMLInputElement>) => void;
	handleAddStudent: (e: FormEvent) => void;
};

export const AddStudent = ({ formValues, handleInputChange, handleAddStudent }: FormProps) => {
	return (
		<ViewWrapper as='form' onSubmit={handleAddStudent}>
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
