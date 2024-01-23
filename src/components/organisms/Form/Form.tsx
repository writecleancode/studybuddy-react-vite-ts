import { FormEvent, useState } from 'react';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { StyledTitle, Wrapper } from '../StudentsList/StudentsList.styles';

const initialFormValues = {
	name: '',
	attendance: '',
	average: '',
};

export const Form = () => {
	const [formValues, setFormValues] = useState(initialFormValues);

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	return (
		<Wrapper>
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
			<Button>Add</Button>
		</Wrapper>
	);
};
