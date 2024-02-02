import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';

export const Note = () => {
	return (
		<NoteWrapper>
			<StyledTitle>Title</StyledTitle>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi voluptate magnam nisi debitis, alias
				cumque quos hic doloribus eum. Recusandae, sequi. Autem illum labore aliquid est quam qui? Libero?
			</p>
			<StyledDeleteButton />
		</NoteWrapper>
	);
};
