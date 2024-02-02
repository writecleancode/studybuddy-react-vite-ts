import { useState } from 'react';
import { Note } from 'src/components/molecules/Note/Note';
import { NotesWrapper, WidgetHandler, Wrapper } from './NotesWidget.styles';

export const NotesWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleWidget = () => setIsOpen(prevState => !prevState);

	return (
		<Wrapper $isOpen={isOpen}>
			<WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
			<NotesWrapper>
				<Note />
				<Note />
				<Note />
			</NotesWrapper>
		</Wrapper>
	);
};
