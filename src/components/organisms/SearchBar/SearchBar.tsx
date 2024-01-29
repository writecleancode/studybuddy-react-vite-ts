import { useState, useCallback } from 'react';
import { useStudents } from 'src/hooks/useStudents';
import { useCombobox } from 'downshift';
import { debounce } from 'lodash';
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
	const [matchingStudents, setMatchingStudents] = useState<never[] | StudentType[]>([]);
	const { findStudents } = useStudents();

	const getMatchingStudents = useCallback(
		debounce(async ({ inputValue }: { inputValue?: string }) => {
			const students = await findStudents(inputValue);
			setMatchingStudents(students);
		}, 500),
		[]
	);

	const { isOpen, getMenuProps, getInputProps, getItemProps } = useCombobox({
		items: matchingStudents,
		onInputValueChange: getMatchingStudents,
	});

	return (
		<SearchBarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<h6>Teacher</h6>
			</StatusInfo>
			<SearchWrapper>
				<Input name='search' placeholder='find student' {...getInputProps()} />
				<SearchResults {...getMenuProps()}>
					{isOpen &&
						matchingStudents.map((student, index) => (
							<li
								key={student.id}
								{...getItemProps({
									item: student,
									index,
								})}>
								{student.name}
							</li>
						))}
				</SearchResults>
			</SearchWrapper>
		</SearchBarWrapper>
	);
};
