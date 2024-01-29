import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StudentType } from 'src/components/organisms/StudentsList/StudentsList';
import { StyledAverage } from 'src/components/atoms/StyledAverage/StyledAverage.styles';

type StudentDetailsProps = {
	student: StudentType | Record<string, never>;
};

export const StudentDetails = ({ student }: StudentDetailsProps) => {
	return (
		<div>
			<StyledTitle>
				{student.name} | Group {student.group}
			</StyledTitle>
			<p>Attendance: {student.attendance}</p>
			<StyledAverage $average={Number(student.average)}>{student.average}</StyledAverage>
		</div>
	);
};
