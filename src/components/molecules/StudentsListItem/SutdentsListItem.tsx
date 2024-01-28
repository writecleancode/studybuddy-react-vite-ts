import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { StyledAverage } from 'src/components/atoms/StyledAverage/StyledAverage.styles';
import { StyledListItem } from './StudentsListItem.styles';

type StudentsListItemProps = {
	studentData: {
		name: string;
		attendance: string;
		average: string;
	};
	onClick: () => void;
};

export const StudentsListItem = ({ studentData: { name, attendance, average }, ...props }: StudentsListItemProps) => {
	return (
		<StyledListItem {...props}>
			<StyledAverage $average={Number(average)}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
		</StyledListItem>
	);
};
