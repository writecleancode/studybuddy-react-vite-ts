import { Modal } from './Modal';
import { StudentDetails } from 'src/components/molecules/StudentDetails';

const mockStudent = {
	id: '1',
	name: 'Adam Romański',
	attendance: '39%',
	average: '2.3',
	group: 'A',
};

const meta = {
	title: 'Components/Organisms/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	args: {
		isOpen: true,
		children: <StudentDetails student={mockStudent} />,
	},
};

export default meta;

export const Default = {};
