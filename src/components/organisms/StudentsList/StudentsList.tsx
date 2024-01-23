import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledList, StyledTitle, Wrapper } from './StudentsList.styles';
import { StudentType } from 'src/views/Root';

type StudentsListType = {
	students: StudentType[];
	handleDeleteStudent: (name: string) => void;
};

export const StudentsList = ({ students, handleDeleteStudent }: StudentsListType) => {
	return (
		<Wrapper>
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
		</Wrapper>
	);
};
