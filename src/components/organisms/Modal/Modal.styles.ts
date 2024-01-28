import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 48px;
	border-radius: 15px;
	min-width: 600px;
	min-height: 700px;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0 -5px 25px -10px rgba(0, 0, 0, 0.3);
`;
