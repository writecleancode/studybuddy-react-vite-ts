import { StyledAttendance, StyledName, Wrapper } from './StyledInfo.styles';

export const StyledInfo = ({ name, attendance }) => {
	return (
		<Wrapper>
			<StyledName>{name}</StyledName>
			<StyledAttendance>attendance: {attendance}</StyledAttendance>
		</Wrapper>
	);
};
