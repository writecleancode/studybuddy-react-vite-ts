import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';

export const Note = ({ title = 'Untitled', content = 'No content' }) => {
	return (
		<NoteWrapper>
			<StyledTitle>{title}</StyledTitle>
			<p>{content}</p>
			<StyledDeleteButton />
		</NoteWrapper>
	);
};
