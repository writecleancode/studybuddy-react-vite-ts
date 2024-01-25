import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StyledList } from './StudentsList.styles';

type StudentType = {
	id: string;
	name: string;
	attendance: string;
	average: string;
	group: string;
};

export const StudentsList = () => {
	const [students, setStudents] = useState<never[] | StudentType[]>([]);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`/students/${id}`)
			.then(({ data }) => setStudents(data.students))
			.catch(err => console.log(err));
	}, [id]);

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
