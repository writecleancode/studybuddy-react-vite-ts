import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

export const addNote = (payload: Record<string, any>) => {
	return {
		type: 'notes/add',
		payload: {
			id: uuid(),
			...payload,
		},
	};
};

export const removeNote = (payload: Record<string, any>) => {
	return {
		type: 'notes/remove',
		payload,
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

const notesReducer = (state = initialState, action: Record<string, any>) => {
	switch (action.type) {
		case 'notes/add':
			return {
				...state,
				notes: [...state.notes, action.payload],
			};

		case 'notes/remove':
			return {
				...state,
				notes: state.notes.filter(note => note.id !== action.payload.id),
			};

		default:
			return state;
	}
};

export const store = createStore(notesReducer);
