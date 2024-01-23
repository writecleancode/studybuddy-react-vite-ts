import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledList } from './StudentsList.styles';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StudentType } from 'src/views/Root';

type StudentsListType = {
	students: StudentType[];
	handleDeleteStudent: (name: string) => void;
};

export const StudentsList = ({ students, handleDeleteStudent }: StudentsListType) => {
	return (
		<>
			<StyledTitle>Students list</StyledTitle>
			<StyledList>
				{students.map(studentData => (
					<StudentsListItem
						key={studentData.name}
						studentData={studentData}
						handleDeleteStudent={handleDeleteStudent}
					/>
				))}
			</StyledList>
		</>
	);
};
