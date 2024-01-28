import { HttpResponse, http } from 'msw';
import { students } from 'src/mocks/data/students';
import { groups } from 'src/mocks/data/groups';

export const handlers = [
	http.get('/groups', () => {
		return HttpResponse.json({
			groups,
		});
	}),

	http.get('/groups/:id', ({ params }) => {
		if (params.id === 'undefined') {
			return HttpResponse.json({
				students,
			});
		}

		const matchingStudents = students.filter(student => student.group === params.id);
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),

	http.get('/students/:id', ({ params }) => {
		if (params.id === 'undefined') {
			return HttpResponse.json({
				student: {},
			});
		}

		const matchingStudent = students.find(student => student.id === params.id);
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
		const matchingStudents = searchPhrase
			? students.filter(student => student.name.toLowerCase().includes(searchPhrase.toLowerCase()))
			: [];
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),
];
