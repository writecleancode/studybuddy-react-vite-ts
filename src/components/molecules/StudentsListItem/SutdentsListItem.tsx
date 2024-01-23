import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'src/components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledListItem } from './StudentsListItem.styles';

type StudentsListItemProps = {
	studentData: {
		name: string;
		attendance: string;
		average: string;
	};
	index: number;
};

export const StudentsListItem = ({ studentData: { name, attendance, average }, index }: StudentsListItemProps) => {
	return (
		<StyledListItem>
			<StyledAverage $average={Number(average)}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
			<DeleteButton onClick={() => alert(`This is Students #${index + 1}`)} />
		</StyledListItem>
	);
};
