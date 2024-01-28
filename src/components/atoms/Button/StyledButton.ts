import styled from 'styled-components';

export const Button = styled.button<{ $isBig?: boolean }>`
	margin: 8px 0;
	padding: ${({ $isBig }) => ($isBig ? '8px 32px' : '8px 16px')};
	border: none;
	border-radius: 100px;
	background-color: ${({ theme }) => theme.colors.lightPurple};
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ $isBig, theme }) => ($isBig ? theme.fontSize.m : theme.fontSize.s)};
	font-weight: bold;
`;
