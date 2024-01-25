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
		axios
			.get(`/students/${groupId}`)
			.then(({ data }) => setStudents(data.students))
			.catch(err => console.log(err));
	}, [groupId]);

	return {
		groups,
		students,
	};
};
