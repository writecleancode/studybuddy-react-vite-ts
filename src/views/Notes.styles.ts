import styled from 'styled-components';
import { FormField } from 'src/components/molecules/FormField/FormField';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 0.7fr 1.3fr;
	grid-gap: 30px;
	width: 100%;
	height: 100%;
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 24px 40px;
	border-radius: 25px;
	width: 100%;
	height: min-content;
	background: ${({ theme }) => theme.colors.white};
`;

export const StyledFormField = styled(FormField)<{ isTextarea?: boolean }>`
	${({ isTextarea }) => (isTextarea ? 'padding: 8px' : null)};
	border-radius: ${({ isTextarea }) => (isTextarea ? '13px' : '25px')};
	width: 100%;
	min-width: 240px;
	height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`;

export const NotesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 24px;
`;
