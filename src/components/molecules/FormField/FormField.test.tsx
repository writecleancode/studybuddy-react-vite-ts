import { renderWithProviders } from 'src/helpers/renderWithProviders';
import { screen } from '@testing-library/react';
import { FormField } from './FormField';

describe('Form Field', () => {
	it('Renders the component', () => {
		renderWithProviders(<FormField label='Test' name='test' id='test' />);
		screen.getByLabelText('Test');
	});
});
