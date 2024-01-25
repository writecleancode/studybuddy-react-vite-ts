import styled from 'styled-components';
import { Input } from 'src/components/atoms/Input/StyledInput';

export const SearchBarWrapper = styled.div`
	grid-row: 1 / 2;
	grid-column: 2 / 3;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

	${Input} {
		margin-bottom: 0;
		padding: 8px 16px;
		border-color: ${({ theme }) => theme.colors.lightPurple};
		width: 100%;
		max-width: 480px;
		font-size: ${({ theme }) => theme.fontSize.l};
	}
`;

export const StatusInfo = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};

	p {
		margin-bottom: 4px;
		font-size: ${({ theme }) => theme.fontSize.m};
	}

	h6 {
		font-size: ${({ theme }) => theme.fontSize.l};
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	margin-left: 48px;
	width: 100%;
	max-width: 550px;
`;

export const SearchResults = styled.ul`
	position: absolute;
	top: 38px;
	left: 0;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	padding: 10px;
	border-radius: 15px;
	width: 100%;
	max-width: 480px;
	max-height: 500px;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.2);
	list-style: none;
	overflow-y: scroll;

	li {
		padding: 20px 8px;
		width: 100%;
		background-color: ${({ theme }) => theme.colors.white};
		color: ${({ theme }) => theme.colors.darkGrey};
		font-weight: bold;
	}

	li:hover,
	li:focus {
		background-color: ${({ theme }) => theme.colors.lightPurple};
	}

	li:not(:last-child) {
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	}
`;
