import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'src/components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledListItem } from './StudentsListItem.styles';
import { StudentType } from 'src/views/Root';

type StudentsListItemProps = {
	studentData: StudentType;
	handleDeleteStudent: (name: string) => void;
};

export const StudentsListItem = ({
	studentData: { name, attendance, average },
	handleDeleteStudent,
}: StudentsListItemProps) => {
	return (
		<StyledListItem>
			<StyledAverage $average={Number(average)}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
			<DeleteButton onClick={() => handleDeleteStudent(name)} />
		</StyledListItem>
	);
};
