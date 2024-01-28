import { StudentsListItem } from './SutdentsListItem';

const meta = {
	title: 'Components/Molecules/StudentsListItem',
	component: StudentsListItem,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

export const BadGrades = {
	args: {
		studentData: {
			name: 'Adam Romański',
			attendance: '86%',
			average: '2.9',
		},
	},
};

export const MediumGrades = {
	args: {
		studentData: {
			name: 'Adam Romański',
			attendance: '89%',
			average: '3.7',
		},
	},
};

export const GoodGrades = {
	args: {
		studentData: {
			name: 'Adam Romański',
			attendance: '95%',
			average: '4.4',
		},
	},
};

export const NoGrades = {
	args: {
		studentData: {
			name: 'Adam Romański',
			attendance: '95%',
			average: null,
		},
	},
};
