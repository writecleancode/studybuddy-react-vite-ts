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
			const { data } = await axios.get(`/groups/${groupId}`);
			return data.students;
		} catch (error) {
			console.log(error);
		}
	}, []);

	const getStudentById = useCallback(async (studentId: string) => {
		try {
			const { data } = await axios.get(`/students/${studentId}`);
			return data.student;
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
		getStudentById,
		findStudents,
	};
};
