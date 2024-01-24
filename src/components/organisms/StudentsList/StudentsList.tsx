import { useContext } from 'react';
import { StudentsContext } from 'src/views/Root';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StyledList } from './StudentsList.styles';

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
