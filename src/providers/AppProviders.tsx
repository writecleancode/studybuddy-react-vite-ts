import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { ErrorProvider } from 'src/hooks/useError';
import { AuthProvider } from 'src/hooks/useAuth';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';

type AppProvidersProps = {
	children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
	return (
		<Provider store={store}>
			<Router>
				<ThemeProvider theme={theme}>
					<ErrorProvider>
						<AuthProvider>
							<GlobalStyle />
							{children}
						</AuthProvider>
					</ErrorProvider>
				</ThemeProvider>
			</Router>
		</Provider>
	);
};
