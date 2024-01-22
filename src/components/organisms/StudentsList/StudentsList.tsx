import { StudentsListItem } from 'src/components/molecules/StudentsListItem/SutdentsListItem';
import { students } from 'src/data/students';

export const StudentsList = () => {
	return (
		<ul>
			{students.map(studentData => (
				<StudentsListItem key={studentData.name} studentData={studentData} />
			))}
		</ul>
	);
};
