import { FormEvent } from 'react';
import { Label } from 'src/components/atoms/Label/StyledLabel';
import { Input } from 'src/components/atoms/Input/StyledInput';
import { Wrapper } from './FormField.styles';

type FormFieldProps = {
	label: string;
	name: string;
	id: string;
	type?: string;
	value: string;
	onChange: (e: FormEvent<HTMLInputElement>) => void;
};

export const FormField = ({ label, name, id, type = 'text', value, onChange }: FormFieldProps) => {
	return (
		<Wrapper>
			<Label htmlFor={id}>{label}</Label>
			<Input name={name} id={id} type={type} value={value} onChange={onChange} />
		</Wrapper>
	);
};
