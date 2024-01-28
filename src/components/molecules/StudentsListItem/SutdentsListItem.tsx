import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { StyledAverage, StyledListItem } from './StudentsListItem.styles';

type StudentsListItemProps = {
	studentData: {
		name: string;
		attendance: string;
		average: string;
	};
};

export const StudentsListItem = ({ studentData: { name, attendance, average } }: StudentsListItemProps) => {
	return (
		<StyledListItem>
			<StyledAverage $average={Number(average)}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
		</StyledListItem>
	);
};
