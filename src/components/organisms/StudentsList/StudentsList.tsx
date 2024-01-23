import { students as studentsData } from 'src/data/students';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledList, Wrapper } from './StudentsList.styles';
import { useEffect, useState } from 'react';

export type StudentType = {
	name: string;
	attendance: string;
	average: string;
};

const mockAPI = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (studentsData) {
				resolve([...studentsData]);
			} else {
				reject({ message: 'Error' });
			}
		}, 2000);
	});
};

export const StudentsList = () => {
	const [students, setStudents] = useState<never[] | StudentType[]>([]);
	const [isLoading, setLoadingState] = useState(false);

	const handleDeleteStudent = (name: string) => {
		const filteredStudents = students.filter(student => student.name !== name);
		setStudents(filteredStudents);
	};

	useEffect(() => {
		setLoadingState(true);
		mockAPI()
			.then((data: any) => {
				setLoadingState(false);
				setStudents(data);
			})
			.catch(err => console.log(err));
	}, [studentsData]);

	return (
		<Wrapper>
			<h1>{isLoading ? 'Loading...' : 'Students list'}</h1>
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
