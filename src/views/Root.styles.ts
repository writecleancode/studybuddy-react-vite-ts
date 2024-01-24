import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 64px;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.lightGrey};
`;
