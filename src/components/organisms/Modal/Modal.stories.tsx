import { Modal } from './Modal';
import { StudentDetails } from 'src/components/molecules/StudentDetails/StudentDetails';

const mockStudent = {
	id: '1',
	name: 'Adam Romański',
	attendance: '39%',
	average: '2.3',
	group: 'A',
	course: 'Business Philosophy',
	grades: [
		{
			subject: 'Business Philosophy',
			average: '3.3',
		},
		{
			subject: 'Marketing',
			average: '4.7',
		},
		{
			subject: 'Modern Economy',
			average: '2.5',
		},
	],
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
