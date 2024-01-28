import styled from 'styled-components';

export const StyledTitle = styled.h1<{ $isBig?: boolean }>`
	margin-bottom: 24px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.xl};
	line-height: ${({ $isBig }) => ($isBig ? '68px' : 'normal')};
`;
