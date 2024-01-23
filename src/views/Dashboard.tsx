import { ViewWrapper } from 'src/components/molecules/ViewWrapper/ViewWrapper';
import { StudentsList } from 'src/components/organisms/StudentsList/StudentsList';
import { StudentType } from './Root';

type StudentsListType = {
	students: StudentType[];
	handleDeleteStudent: (name: string) => void;
};

export const Dashboard = ({ students, handleDeleteStudent }: StudentsListType) => {
	return (
		<ViewWrapper>
			<StudentsList students={students} handleDeleteStudent={handleDeleteStudent} />
		</ViewWrapper>
	);
};
