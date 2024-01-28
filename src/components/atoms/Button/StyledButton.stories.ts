import { Button } from './StyledButton';

const meta = {
	title: 'Components/Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	args: {
		children: 'Read more',
	},
};

export default meta;

export const Default = {};

export const BigButton = {
	args: {
		$isBig: true,
	},
};
