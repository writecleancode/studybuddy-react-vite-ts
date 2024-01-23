import { students } from 'src/data/students';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledList, Wrapper } from './StudentsList.styles';

export const StudentsList = () => {
	return (
		<Wrapper>
			<StyledList>
				{students.map((studentData, index) => (
					<StudentsListItem key={studentData.name} studentData={studentData} index={index} />
				))}
			</StyledList>
		</Wrapper>
	);
};
