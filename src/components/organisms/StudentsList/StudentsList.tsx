import { useState } from 'react';
import { students as studentsData } from 'src/data/students';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledList, StyledTitle, Wrapper } from './StudentsList.styles';

export type StudentType = {
	name: string;
	attendance: string;
	average: string;
};

export const StudentsList = () => {
	const [students, setStudents] = useState<never[] | StudentType[]>(studentsData);

	const handleDeleteStudent = (name: string) => {
		const filteredStudents = students.filter(student => student.name !== name);
		setStudents(filteredStudents);
	};

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
