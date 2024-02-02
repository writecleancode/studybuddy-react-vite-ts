import { fireEvent, render, screen, waitFor } from 'src/test-utils';
import { Root } from './Root';

describe('Root compontent', () => {
	it('Renders the component as unauthenticated user', () => {
		render(<Root />);
		screen.getByLabelText('Login');
	});

	it('Displays error message when wrong credentials are passed', async () => {
		render(<Root />);
		const loginInput = screen.getByLabelText('Login');
		const passwordInput = screen.getByLabelText('Password');
		const signInBtn = screen.getByText('Sign in');

		fireEvent.change(loginInput, { target: { value: 'wrong@login.com' } });
		fireEvent.change(passwordInput, { target: { value: 'wrongPassword123' } });
		fireEvent.click(signInBtn);

		await waitFor(() => screen.getByText('Ooops'));
	});

	it('Displays authenticated application', async () => {
		render(<Root />);
		const loginInput = screen.getByLabelText('Login');
		const passwordInput = screen.getByLabelText('Password');
		const signInBtn = screen.getByText('Sign in');

		fireEvent.change(loginInput, { target: { value: 'teacher@studybuddy.com' } });
		fireEvent.change(passwordInput, { target: { value: '1234' } });
		fireEvent.click(signInBtn);

		await waitFor(() => screen.getByText('Dashboard'));
	});
});
