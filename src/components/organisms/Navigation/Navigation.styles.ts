import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
	grid-row: 1 / 3;
	grid-column: 1 / 2;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding-top: 32px;
	padding-bottom: 32px;
	border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 48px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.darkGrey};

	p {
		margin-right: 24px;
		margin-left: auto;
		padding-top: 10px;
		padding-bottom: 10px;
		width: min-content;
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSize.l};
		font-weight: bold;
		text-align: right;
	}
`;

export const StyledLink = styled(NavLink)`
	position: relative;
	margin: 6px 20px;
	padding: 6px 12px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-weight: bold;
	text-decoration: none;

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		right: -20px;
		translate: 0 -50%;
		width: 24px;
		height: 4px;
		background-color: ${({ theme }) => theme.colors.grey};
		opacity: 0;
		transition: opacity 0.4s ease-in-out;
	}

	&.active::after {
		opacity: 1;
	}
`;
