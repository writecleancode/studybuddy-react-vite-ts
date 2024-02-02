import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';
import { useError } from 'src/hooks/useError';
import { useForm } from 'react-hook-form';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { Notes } from './Notes';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ErrorMessage } from 'src/components/molecules/ErrorMessage/ErrorMessage';
import { Wrapper } from './Root.styles';

type Inputs = {
	login: string;
	password: string;
};

export const UnauthenticatedApp = () => {
	const { handleSignIn } = useAuth();
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
					<Route path='/notes' element={<Notes />} />
				</Routes>
			</Wrapper>
		</MainTemplate>
	);
};

export const Root = () => {
	const auth = useAuth();
	const { error } = useError();

	return (
		<>
			{error ? <ErrorMessage errorMessage={error} /> : null}
			{auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
		</>
	);
};
