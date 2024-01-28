import { FormField } from './FormField';

const meta = {
	title: 'Components/Molecules/FormField',
	component: FormField,
	parameters: {
		layout: 'centered',
	},
	args: {
		name: 'story',
		id: 'story',
	},
};

export default meta;

export const Default = {
	args: {
		label: 'Login',
	},
};

export const LongLabel = {
	args: {
		label: 'Very long label to see how it looks',
	},
};
