import { useCallback } from 'react';
import axios from 'axios';

export const useStudents = () => {
	const getGroups = useCallback(async () => {
		try {
			const { data } = await axios.get('/groups');
			return data.groups;
		} catch (error) {
			console.log(error);
		}
	}, []);

	const getStudentsByGroup = useCallback(async (groupId?: string) => {
		if (!groupId) return [];
		try {
			const { data } = await axios.get(`/students/${groupId}`);
			return data.students;
		} catch (error) {
			console.log(error);
		}
	}, []);

	const findStudents = async (searchPhrase?: string) => {
		if (!searchPhrase) return [];
		try {
			const { data } = await axios.post('/students/search', {
				searchPhrase,
			});
			return data.students;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		getGroups,
		getStudentsByGroup,
		findStudents,
	};
};
