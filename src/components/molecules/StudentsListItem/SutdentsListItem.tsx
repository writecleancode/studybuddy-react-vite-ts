import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'src/components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledListItem } from './StudentsListItem.styles';
import { StudentType, StudentsContext } from 'src/views/Root';
import { useContext } from 'react';

type StudentsListItemProps = {
	studentData: StudentType;
};

export const StudentsListItem = ({ studentData: { name, attendance, average } }: StudentsListItemProps) => {
	const { handleDeleteStudent } = useContext(StudentsContext);

	return (
		<StyledListItem>
			<StyledAverage $average={Number(average)}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
			<DeleteButton onClick={() => handleDeleteStudent(name)} />
		</StyledListItem>
	);
};
