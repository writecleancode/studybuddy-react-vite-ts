import { Button } from 'src/components/atoms/Button/StyledButton';
import { Note } from 'src/components/molecules/Note/Note';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from './Notes.styles';

export const Notes = () => {
	return (
		<Wrapper>
			<FormWrapper>
				<StyledFormField label='Title' name='title' id='title' />
				<StyledFormField $isTextarea label='Content' name='content' id='content' type='textarea' />
				<Button>Add</Button>
			</FormWrapper>
			<NotesWrapper>
				<Note />
				<Note />
				<Note />
			</NotesWrapper>
		</Wrapper>
	);
};
