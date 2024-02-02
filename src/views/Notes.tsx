import { useSelector, useDispatch } from 'react-redux';
import { addNote } from 'src/store';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { Note } from 'src/components/molecules/Note/Note';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from './Notes.styles';

type Inputs = {
	title?: string;
	content?: string;
};

export const Notes = () => {
	const notes = useSelector((state: Record<string, []>) => state.notes);
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm<Inputs>();

	const handleAddNote = ({ title, content }: Inputs) => {
		dispatch(
			addNote({
				title,
				content,
			})
		);
	};

	return (
		<Wrapper>
			<FormWrapper as='form' onSubmit={handleSubmit(handleAddNote)}>
				<StyledFormField label='Title' id='title' {...register('title')} />
				<StyledFormField isTextarea label='Content' id='content' {...register('content')} />
				<Button type='submit'>Add</Button>
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
