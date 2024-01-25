import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { StudentsList } from 'src/components/organisms/StudentsList/StudentsList';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';

export const Dashboard = () => {
	const [groups, setGroups] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get('/groups')
			.then(({ data }) => setGroups(data.groups))
			.catch(err => console.log(err));
	}, []);

	if (!id && groups.length) return <Navigate to={`/group/${groups[0]}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<StyledTitle as='h2'>Group {id}</StyledTitle>
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
