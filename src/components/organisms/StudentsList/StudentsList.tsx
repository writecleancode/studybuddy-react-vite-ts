import { useParams } from 'react-router-dom';
import { useStudents } from 'src/hooks/useStudents';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StyledList } from './StudentsList.styles';

export const StudentsList = () => {
	const { id } = useParams();
	const { students } = useStudents(id);

	return (
		<>
			<StyledTitle>Students list</StyledTitle>
			<StyledList>
				{students.map(studentData => (
					<StudentsListItem key={studentData.id} studentData={studentData} />
				))}
			</StyledList>
		</>
	);
};
