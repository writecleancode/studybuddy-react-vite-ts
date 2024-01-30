import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import { db } from './db';

export const worker = setupWorker(...handlers);

const seed = () => {
	db.group.create({ id: 'A' });
	db.group.create({ id: 'B' });
	db.group.create({ id: 'C' });

	for (let i = 0; i < 16; i++) {
		db.student.create();
	}
};

seed();
