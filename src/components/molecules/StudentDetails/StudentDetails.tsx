import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StudentType } from 'src/components/organisms/StudentsList/StudentsList';
import { StyledAverage } from 'src/components/atoms/StyledAverage/StyledAverage.styles';
import {
	BigAverage,
	StyledDetails,
	StyledInfo,
	StyledLabel,
	StyledSubjectInfo,
	Wrapper,
} from './StudentDetails.styles';

type StudentDetailsProps = {
	student: StudentType | Record<string, never>;
};

export const StudentDetails = ({ student }: StudentDetailsProps) => {
	return (
		<Wrapper>
			<BigAverage $average={Number(student.average)}>{student.average}</BigAverage>
			<StyledTitle>{student.name}</StyledTitle>
			<StyledDetails>
				<StyledLabel>Course:</StyledLabel>
				<StyledInfo $isBig>{student.course}</StyledInfo>
				<StyledLabel>Average grades:</StyledLabel>
				{student.grades.map(({ subject, average }) => (
					<StyledSubjectInfo key={subject}>
						<StyledInfo>{subject}</StyledInfo>
						<StyledAverage $average={Number(average)}>{average}</StyledAverage>
					</StyledSubjectInfo>
				))}
			</StyledDetails>
		</Wrapper>
	);
};
