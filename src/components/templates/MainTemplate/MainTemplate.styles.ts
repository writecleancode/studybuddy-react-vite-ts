import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 180px 1fr;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.lightGrey};
`;
