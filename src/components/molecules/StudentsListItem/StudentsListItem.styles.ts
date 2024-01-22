import styled from 'styled-components';

export const StyledListItem = styled.li`
	display: flex;
	align-items: center;
	padding: 24px 0;
	border-bottom: 1px solid #dfe2e8;

	&:last-child {
		border-bottom: none;
	}
`;

export const StyledAverage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	border-radius: 100px;
	background-color: ${({ theme, $average }) => {
		if ($average >= 4) return theme.colors.success;
		if ($average >= 3) return theme.colors.warning;
		if ($average >= 2) return theme.colors.error;
		return theme.colors.grey;
	}};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: bold;
`;
