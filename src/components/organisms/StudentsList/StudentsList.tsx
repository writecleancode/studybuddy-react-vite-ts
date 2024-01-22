import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { students } from 'src/data/students';
import { StyledList, Wrapper } from './StudentsList.styles';

export const StudentsList = () => {
	return (
		<Wrapper>
			<StyledList>
				{students.map(studentData => (
					<StudentsListItem key={studentData.name} studentData={studentData} />
				))}
			</StyledList>
		</Wrapper>
	);
};
