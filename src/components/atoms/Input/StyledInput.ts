import styled from 'styled-components';

export const Input = styled.input`
	margin-bottom: 16px;
	padding: 5px 8px;
	font-size: ${({ theme }) => theme.fontSize.m};
	border: 1px solid #c0c7d6;
	border-radius: 15px;
	box-shadow: -2px 4px 10px #737c8e17;
	resize: none;

	&:focus {
		box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
		outline: none;
	}
`;
