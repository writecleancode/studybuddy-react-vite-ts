import { StyledAttendance, StyledName, Wrapper } from './StyledInfo.styles';

type StyledInfoProps = {
	name: string;
	attendance: string;
};

export const StyledInfo = ({ name, attendance }: StyledInfoProps) => {
	return (
		<Wrapper>
			<StyledName>{name}</StyledName>
			<StyledAttendance>attendance: {attendance}</StyledAttendance>
		</Wrapper>
	);
};
