import { HttpResponse, http } from 'msw';
import { db } from '../db';

export const handlers = [
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

	http.get('/students/:id', ({ params }) => {
		if (params.id === 'undefined') {
			return HttpResponse.json({
				student: db.student.findFirst,
			});
		}

		const matchingStudent = db.student.findFirst({
			where: {
				id: {
					equals: params.id as string,
				},
			},
		});
		if (!matchingStudent) {
			return new HttpResponse('No matching student', {
				status: 404,
			});
		}

		return HttpResponse.json({
			student: matchingStudent,
		});
	}),

	http.post('/students/search', async ({ request }) => {
		const { searchPhrase } = (await request.json()) as { searchPhrase: string };

		const matchingStudents = db.student.findMany({
			where: {
				name: {
					contains: searchPhrase,
				},
			},
		});
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),
];
