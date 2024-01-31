import { HttpResponse, http } from 'msw';
import { db } from '../db';

export const groups = [
	http.get('/groups', () => {
		const groups = db.group.getAll();
		const groupNames = groups.map(group => group.id);
		return HttpResponse.json({
			groups: groupNames,
		});
	}),

	http.get('/groups/:id', ({ params }) => {
		if (params.id === 'undefined') {
			return new HttpResponse(null, {
				status: 404,
				statusText: 'Please provide the group ID',
			});
		}

		const matchingStudents = db.student.findMany({
			where: {
				group: {
					equals: params.id as string,
				},
			},
		});
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),
];
