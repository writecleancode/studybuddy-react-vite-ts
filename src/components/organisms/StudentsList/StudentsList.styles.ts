import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 25px;
	padding: 32px 64px;
	border-radius: 25px;
	width: 100%;
	max-width: 500px;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
	list-style: none;
`;

export const StyledTitle = styled.h1`
	margin-bottom: 24px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.xl};
`;
