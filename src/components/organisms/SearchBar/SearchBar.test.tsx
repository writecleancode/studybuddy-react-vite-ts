import { fireEvent, render, screen } from 'src/test-utils';
import { setupServer } from 'msw/node';
import { handlers } from 'src/mocks/handlers';
import { SearchBar } from './SearchBar';

const server = setupServer(...handlers);

describe('Search Bar', () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('Renders the component', () => {
		render(<SearchBar />);
		screen.getByText('Logged as:');
		screen.getByPlaceholderText('find student');
	});

	it('Displays students if search Phrase is matching', async () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText('find student');
		fireEvent.change(input, { target: { value: 'lej' } });
		await screen.findByText('Weronika Leja');
	});
});
