import { renderWithProviders } from 'src/helpers/renderWithProviders';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { NewsSection, query } from './NewsSection';

const mock = new MockAdapter(axios);

describe('News Section', () => {
	afterEach(() => mock.reset());

	it('Displays error when articles are not loaded correctly', async () => {
		mock
			.onPost('https://graphql.datocms.com/', {
				query,
			})
			.reply(500);

		renderWithProviders(<NewsSection />);
		await screen.findByText('Sorry, we could not load the articles...');
	});

	it('Displays the articles', async () => {
		mock
			.onPost('https://graphql.datocms.com/', {
				query,
			})
			.reply(200, {
				data: {
					allArticles: [
						{ id: '1', title: 'Test title', category: 'Testing', content: 'Lorem testium, testing component.' },
					],
				},
			});

		renderWithProviders(<NewsSection />);
		await screen.findByText('Test title');
	});
});