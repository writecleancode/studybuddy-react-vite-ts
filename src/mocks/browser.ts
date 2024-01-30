import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import { db } from './handlers/db';

export const worker = setupWorker(...handlers);

const createStudents = () => {
	for (let i = 0; i < 16; i++) {
		db.student.create();
	}
};

createStudents();
