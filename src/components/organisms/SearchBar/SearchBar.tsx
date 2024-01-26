import { FormEvent, useEffect, useState } from 'react';
import { useStudents } from 'src/hooks/useStudents';
import { Input } from 'src/components/atoms/Input/StyledInput';
import { SearchBarWrapper, SearchResults, SearchWrapper, StatusInfo } from './SearchBar.styles';

type StudentType = {
	id: string;
	name: string;
	attendance: string;
	average: string;
	group: string;
};

export const SearchBar = () => {
	const [inputValue, setInputValue] = useState('');
	const [matchingStudents, setMatchingStudents] = useState<never[] | StudentType[]>([]);
	const { findStudents } = useStudents();

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
	};

	const getMatchingStudents = async () => {
		const students = await findStudents(inputValue);
		setMatchingStudents(students);
	};
	500;

	useEffect(() => {
		getMatchingStudents();
	}, [inputValue]);

	return (
		<SearchBarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<h6>Teacher</h6>
			</StatusInfo>
			<SearchWrapper>
				<Input name='search' id='search' placeholder='find student' value={inputValue} onChange={handleInputChange} />
				{matchingStudents.length ? (
					<SearchResults>
						{matchingStudents.map(student => (
							<li key={student.id}>{student.name}</li>
						))}
					</SearchResults>
				) : null}
			</SearchWrapper>
		</SearchBarWrapper>
	);
};
