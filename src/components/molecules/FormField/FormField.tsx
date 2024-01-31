import { FormEvent, Ref, forwardRef } from 'react';
import { Label } from 'src/components/atoms/Label/StyledLabel';
import { Input } from 'src/components/atoms/Input/StyledInput';
import { Wrapper } from './FormField.styles';

type FormFieldProps = {
	label: string;
	name: string;
	id: string;
	type?: string;
	autoComplete?: string;
	value?: string;
	onChange?: (e: FormEvent<HTMLInputElement>) => void;
};

type refType = Ref<HTMLInputElement>;

export const FormField = forwardRef(
	({ label, name, id, type = 'text', autoComplete, value, onChange, ...props }: FormFieldProps, ref: refType) => {
		return (
			<Wrapper>
				<Label htmlFor={id}>{label}</Label>
				<Input
					name={name}
					id={id}
					type={type}
					autoComplete={autoComplete}
					value={value}
					onChange={onChange}
					ref={ref}
					{...props}
				/>
			</Wrapper>
		);
	}
);
