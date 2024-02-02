import { useDispatch } from 'react-redux';
import { removeNote } from 'src/store';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';

type NoteProps = {
	id: string;
	title?: string;
	content?: string;
};

export const Note = ({ id, title = 'Untitled', content = 'No content' }: NoteProps) => {
	const dispatch = useDispatch();

	const handleRemoveNote = () => {
		dispatch(removeNote({ id }));
	};

	return (
		<NoteWrapper>
			<StyledTitle>{title === '' ? 'Untitled' : title}</StyledTitle>
			<p>{content === '' ? 'No content' : content}</p>
			<StyledDeleteButton onClick={handleRemoveNote} />
		</NoteWrapper>
	);
};
