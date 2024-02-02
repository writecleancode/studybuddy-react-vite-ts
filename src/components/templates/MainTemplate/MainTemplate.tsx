import { ReactNode } from 'react';
import { Navigation } from 'src/components/organisms/Navigation/Navigation';
import { SearchBar } from 'src/components/organisms/SearchBar/SearchBar';
import { NewsSection } from 'src/components/templates/NewsSection/NewsSection';
import { NotesWidget } from 'src/components/organisms/NotesWidget/NotesWidget';
import { Wrapper } from './MainTemplate.styles';

type MainTemplateProps = {
	children: ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
	return (
		<Wrapper>
			<Navigation />
			<SearchBar />
			<NewsSection />
			{children}
			<NotesWidget />
		</Wrapper>
	);
};
