import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { StudentsList } from 'src/components/organisms/StudentsList/StudentsList';
import { Wrapper } from './Root.styles';

export const Root = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Wrapper>
				<StudentsList />
			</Wrapper>
		</ThemeProvider>
	);
};
