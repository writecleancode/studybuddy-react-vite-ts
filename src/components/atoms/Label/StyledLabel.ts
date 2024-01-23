import styled from 'styled-components';

export const Label = styled.label`
	margin-bottom: 8px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: bold;
`;
