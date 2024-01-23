import styled from 'styled-components';

export const Button = styled.button`
	margin: 8px 0;
	padding: 8px 16px;
	border: none;
	border-radius: 100px;
	background-color: ${({ theme }) => theme.colors.lightPurple};
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.s};
	font-weight: bold;
`;
