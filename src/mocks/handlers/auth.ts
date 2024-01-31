import { HttpResponse, http } from 'msw';
import { db } from '../db';
import { authenticateRequest } from '../helpers';

const sanitizeUser = (user: Record<string, any>) => {
	const { password, ...rest } = user;
	return rest;
};

export const auth = [
	http.post('/login', async ({ request }) => {
		const data = (await request.json()) as Record<string, string>;
		const user = db.teacher.findFirst({
			where: {
				login: {
					equals: data?.login,
				},
			},
		});

		if (user?.password === data?.password) {
			const token = btoa(user.login);
			localStorage.setItem('__be_token__', token);
			return HttpResponse.json({ ...sanitizeUser(user), token });
		}

		return new HttpResponse(null, {
			status: 403,
			statusText: 'Invalid user data',
		});
	}),

	http.get('/me', ({ request }) => {
		if (authenticateRequest(request)) {
			const user = db.teacher.getAll()[0];
			return HttpResponse.json({ ...sanitizeUser(user) });
		}

		return new HttpResponse(null, {
			status: 403,
		});
	}),
];
