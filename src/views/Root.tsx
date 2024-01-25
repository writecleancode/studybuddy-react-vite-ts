import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { Wrapper } from './Root.styles';

export const Root = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<Wrapper>
						<Routes>
							<Route path='/' element={<Navigate to='/group' />} />
							<Route path='/group'>
								<Route path=':id?' element={<Dashboard />} />
							</Route>
						</Routes>
					</Wrapper>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};
