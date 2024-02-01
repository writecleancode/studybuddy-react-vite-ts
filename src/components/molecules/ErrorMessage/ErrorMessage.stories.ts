import { ErrorMessage } from './ErrorMessage';

const meta = {
	title: 'Components/Molecules/ErrorMessage',
	component: ErrorMessage,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

export const Default = {};

export const WrongLoginOrPassword = {
	args: {
		message: 'Wrong login or password',
	},
};
