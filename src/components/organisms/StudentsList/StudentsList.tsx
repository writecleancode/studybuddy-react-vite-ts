import { useContext } from 'react';
import { StudentsContext } from 'src/providers/StudentsProvider';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledList } from './StudentsList.styles';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';

export const StudentsList = () => {
	const { students } = useContext(StudentsContext);

	return (
		<>
			<StyledTitle>Students list</StyledTitle>
			<StyledList>
				{students.map(studentData => (
					<StudentsListItem key={studentData.name} studentData={studentData} />
				))}
			</StyledList>
		</>
	);
};
