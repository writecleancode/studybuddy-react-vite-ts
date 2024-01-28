import styled from 'styled-components';
import { StyledAverage } from 'src/components/atoms/StyledAverage/StyledAverage.styles';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 32px;
	width: 100%;
`;

export const BigAverage = styled(StyledAverage)`
	position: absolute;
	left: 40px;
	width: 68px;
	height: 68px;
	font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StyledDetails = styled.div`
	padding: 40px;
	width: 100%;
`;

export const StyledLabel = styled.h3`
	margin-bottom: 0;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.l};
`;

export const StyledInfo = styled.p<{ $isBig?: boolean }>`
	margin: 10px 20px 20px 0;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme, $isBig }) => ($isBig ? theme.fontSize.xl : theme.fontSize.l)};
`;

export const StyledSubjectInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 250px;
`;
