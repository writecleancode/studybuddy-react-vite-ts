import { auth } from './auth';
import { groups } from './groups';
import { students } from './students';

export const handlers = [...groups, ...students, ...auth];
