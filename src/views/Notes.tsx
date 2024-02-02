import { useSelector, useDispatch } from 'react-redux';
import { addNote } from 'src/store';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { Note } from 'src/components/molecules/Note/Note';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from './Notes.styles';

export const Notes = () => {
	const notes = useSelector((state: Record<string, []>) => state.notes);
	const dispatch = useDispatch();

	const handleAddNote = () => {
		dispatch(
			addNote({
				title: `New note ${Math.round(Math.random() * 10)}`,
				content: 'This is a random note',
			})
		);
	};

	return (
		<Wrapper>
			<FormWrapper>
				<StyledFormField label='Title' name='title' id='title' />
				<StyledFormField isTextarea label='Content' name='content' id='content' />
				<Button onClick={handleAddNote}>Add</Button>
			</FormWrapper>
			<NotesWrapper>
				{notes.length ? (
					notes.map(({ id, title, content }) => <Note key={id} id={id} title={title} content={content} />)
				) : (
					<p>Create your first note</p>
				)}
			</NotesWrapper>
		</Wrapper>
	);
};
