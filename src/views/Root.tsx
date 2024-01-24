import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { StudentsProvider } from 'src/providers/StudentsProvider';
import { Dashboard } from './Dashboard';
import { AddStudent } from './AddStudent';
import { Wrapper } from './Root.styles';

export const Root = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<StudentsProvider>
						<Wrapper>
							<Routes>
								<Route path='/' element={<Dashboard />} />
								<Route path='/add-student' element={<AddStudent />} />
							</Routes>
						</Wrapper>
					</StudentsProvider>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};
