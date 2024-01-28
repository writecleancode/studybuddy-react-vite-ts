import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StudentType } from 'src/components/organisms/StudentsList/StudentsList';
import { StyledAverage } from 'src/components/atoms/StyledAverage/StyledAverage.styles';

type StudentDetailsProps = {
	currentStudent: StudentType | Record<string, never>;
};

export const StudentDetails = ({ currentStudent }: StudentDetailsProps) => {
	return (
		<div>
			<StyledTitle>
				{currentStudent.name} | Group {currentStudent.group}
			</StyledTitle>
			<p>Attendance: {currentStudent.attendance}</p>
			<StyledAverage $average={Number(currentStudent.average)}>{currentStudent.average}</StyledAverage>
		</div>
	);
};
