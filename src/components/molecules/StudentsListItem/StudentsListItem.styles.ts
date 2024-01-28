import styled from 'styled-components';

export const StyledListItem = styled.li`
	display: flex;
	align-items: center;
	padding: 24px 0;
	border-bottom: 1px solid #dfe2e8;
	cursor: pointer;

	&:last-child {
		border-bottom: none;
	}
`;
