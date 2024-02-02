import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Note } from 'src/components/molecules/Note/Note';
import { NotesWrapper, WidgetHandler, Wrapper } from './NotesWidget.styles';

export const NotesWidget = () => {
	const [isOpen, setIsOpen] = useState(false);
	const notes = useSelector((state: Record<string, []>) => state.notes);

	const handleToggleWidget = () => setIsOpen(prevState => !prevState);

	return (
		<Wrapper $isOpen={isOpen}>
			<WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
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
