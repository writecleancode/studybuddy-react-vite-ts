import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

export const addNote = payload => {
	return {
		type: 'notes/add',
		payload: {
			id: uuid(),
			...payload,
		},
	};
};

const initialState = {
	notes: [
		{
			id: uuid(),
			title: 'Title ipsum',
			content: 'Lorem ipsum dolor sit amet',
		},
	],
};

const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'notes/add':
			return {
				...state,
				notes: [...state.notes, action.payload],
			};

		default:
			return state;
	}
};

export const store = createStore(notesReducer);
