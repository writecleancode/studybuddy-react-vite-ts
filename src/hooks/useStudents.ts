import { useEffect, useState } from 'react';
import axios from 'axios';

type StudentType = {
	id: string;
	name: string;
	attendance: string;
	average: string;
	group: string;
};

export const useStudents = (groupId?: string) => {
	const [groups, setGroups] = useState<never[] | string[]>([]);
	const [students, setStudents] = useState<never[] | StudentType[]>([]);

	useEffect(() => {
		axios
			.get('/groups')
			.then(({ data }) => setGroups(data.groups))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		if (!groupId) return;
		axios
			.get(`/students/${groupId}`)
			.then(({ data }) => setStudents(data.students))
			.catch(err => console.log(err));
	}, [groupId]);

	const findStudents = async (searchPhrase: string) => {
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
		groups,
		students,
		findStudents,
	};
};
