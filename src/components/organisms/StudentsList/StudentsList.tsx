import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from 'src/hooks/useStudents';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StyledList } from './StudentsList.styles';

type StudentsListProps = {
	handleOpenStudentDetails: (id: string) => void;
};

export type StudentType = {
	id: string;
	name: string;
	attendance: string;
	average: string;
	group: string;
	course: string;
	grades: { subject: string; average: string }[];
};

export const StudentsList = ({ handleOpenStudentDetails }: StudentsListProps) => {
	const [students, setStudents] = useState<never[] | StudentType[]>([]);
	const { id } = useParams();
	const { getStudentsByGroup } = useStudents();

	useEffect(() => {
		(async () => {
			const data = await getStudentsByGroup(id);
			setStudents(data);
		})();
	}, [id, getStudentsByGroup]);

	return (
		<>
			<StyledTitle>Students list</StyledTitle>
			<StyledList>
				{students.map(studentData => (
					<StudentsListItem
						key={studentData.id}
						studentData={studentData}
						onClick={() => handleOpenStudentDetails(studentData.id)}
					/>
				))}
			</StyledList>
		</>
	);
};
