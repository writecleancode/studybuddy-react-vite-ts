import { useParams, Link, Navigate } from 'react-router-dom';
import { useStudents } from 'src/hooks/useStudents';
import { StudentsList } from 'src/components/organisms/StudentsList/StudentsList';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';

export const Dashboard = () => {
	const { groups } = useStudents();
	const { id } = useParams();

	if (!id && groups.length) return <Navigate to={`/group/${groups[0]}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<StyledTitle as='h2'>Group {id ? id : '-'}</StyledTitle>
				<nav>
					{groups.length
						? groups.map(group => (
								<Link to={`/group/${group}`} key={group}>
									{group}{' '}
								</Link>
						  ))
						: null}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<StudentsList />
			</GroupWrapper>
		</Wrapper>
	);
};
