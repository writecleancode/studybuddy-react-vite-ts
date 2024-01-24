import { ViewWrapper } from 'src/components/molecules/ViewWrapper/ViewWrapper';
import { StudentsList } from 'src/components/organisms/StudentsList/StudentsList';

export const Dashboard = () => {
	return (
		<ViewWrapper>
			<StudentsList />
		</ViewWrapper>
	);
};
