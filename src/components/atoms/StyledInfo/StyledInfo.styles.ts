import { styled } from 'styled-components';

export const Wrapper = styled.div`
	margin: 0 24px;
`;

export const StyledName = styled.p`
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.l};
	font-weight: bold;
`;

export const StyledAttendance = styled.p`
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.s};
`;
