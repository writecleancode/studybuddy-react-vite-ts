import { fireEvent, render, screen, waitFor } from 'src/test-utils';
import { SearchBar } from './SearchBar';

describe('Search Bar', () => {
	it('Renders the component', () => {
		render(<SearchBar />);
		screen.getByText('Logged as:');
		screen.getByPlaceholderText('find student');
	});

	it('Displays students if search Phrase is matching', async () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText('find student');
		fireEvent.change(input, { target: { value: 'Al' } });
		await screen.findByText('Alberto Prosacco');
	});

	it('Hides the results when search input is empty', async () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText('find student');
		fireEvent.change(input, { target: { value: 'Al' } });
		await screen.findByText('Alberto Prosacco');

		const results = screen.getByLabelText('search results');
		fireEvent.change(input, { target: { value: '' } });
		await waitFor(() => {
			expect(results).not.toBeVisible();
		});
	});
});
