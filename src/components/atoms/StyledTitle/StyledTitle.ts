import styled from 'styled-components';

export const StyledTitle = styled.h1`
	margin-bottom: 24px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.xl};
`;
