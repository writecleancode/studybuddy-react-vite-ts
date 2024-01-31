import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { Wrapper } from './Root.styles';

type Inputs = {
	login: string;
	password: string;
};

type handleSignInTypes = {
	login: string;
	password: string;
};

type UnauthenticatedAppProps = {
	handleSignIn: ({ login, password }: handleSignInTypes) => Promise<void>;
	loginError: string;
};

export const UnauthenticatedApp = ({ handleSignIn, loginError }: UnauthenticatedAppProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	return (
		<form
			onSubmit={handleSubmit(handleSignIn)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<FormField label='Login' id='login' autoComplete='username' {...register('login', { required: true })} />
			{errors.login ? <span>Login is required</span> : null}
			<FormField
				label='Password'
				id='password'
				type='password'
				autoComplete='current-password'
				{...register('password', { required: true })}
			/>
			{errors.password ? <span>Password is required</span> : null}
			<Button type='submit'>Sign in</Button>
			{loginError ? <p>{loginError}</p> : null}
		</form>
	);
};

export const AuthenticatedApp = () => {
	return (
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
	);
};

export const Root = () => {
	const [user, setUser] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			(async () => {
				try {
					const response = await axios.get('/me', {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					setUser(response.data);
				} catch (error) {
					console.log(error);
				}
			})();
		}
	}, []);

	const handleSignIn = async ({ login, password }: handleSignInTypes) => {
		try {
			const response = await axios.post('/login', { login, password });
			setUser(response.data);
			localStorage.setItem('token', response.data.token);
		} catch (error) {
			console.log(error);
			setError('Please provide valid user data');
		}
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{user ? <AuthenticatedApp /> : <UnauthenticatedApp handleSignIn={handleSignIn} loginError={error} />}
			</ThemeProvider>
		</Router>
	);
};
