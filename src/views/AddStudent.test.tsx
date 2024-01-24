import { renderWithProviders } from 'src/helpers/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';
import { AddStudent } from './AddStudent';
import { Dashboard } from './Dashboard';

describe('Add Student', () => {
	it('Checks if new student is added to the list', () => {
		renderWithProviders(
			<>
				<AddStudent />
				<Dashboard />
			</>
		);
		fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Karolina Węgrzyn' } });
		fireEvent.change(screen.getByLabelText('Attendance'), { target: { value: '97%' } });
		fireEvent.change(screen.getByLabelText('Average'), { target: { value: '4.6' } });
		fireEvent.click(screen.getByLabelText('Consent'));
		fireEvent.click(screen.getByText('Add'));

		screen.getByText('Karolina Węgrzyn');
	});
});
