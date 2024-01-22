type StudentsListItemProps = {
	studentData: {
		name: string;
		attendance: string;
		average: string;
	};
};

export const StudentsListItem = ({ studentData: { name, attendance, average } }: StudentsListItemProps) => {
	return (
		<li>
			<div>{average}</div>
			<div>
				<p>{name}</p>
				<p>attendance: {attendance}</p>
			</div>
			<button>X</button>
		</li>
	);
};
