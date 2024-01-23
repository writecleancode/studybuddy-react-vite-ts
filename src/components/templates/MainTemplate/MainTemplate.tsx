import { ReactNode } from 'react';
import { Navigation } from 'src/components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';

type MainTemplateProps = {
	children: ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
	return (
		<Wrapper>
			<Navigation />
			{children}
		</Wrapper>
	);
};
