import { DefaultBodyType, StrictRequest } from 'msw';

export const authenticateRequest = (request: StrictRequest<DefaultBodyType>) => {
	const token = localStorage.getItem('__be_token__')?.trim() || null;
	const userToken = request.headers.get('Authorization')?.replace('Bearer ', '').trim();
	return token === userToken;
};
