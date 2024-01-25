import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ViewWrapper } from 'src/components/molecules/ViewWrapper/ViewWrapper';
import { StudentsList } from 'src/components/organisms/StudentsList/StudentsList';

export const Dashboard = () => {
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		axios
			.get('/groups')
			.then(({ data }) => setGroups(data.groups))
			.catch(err => console.log(err));
	}, []);

	return (
		<ViewWrapper>
			<nav>
				{groups.length
					? groups.map(group => (
							<Link to={`/group/${group}`} key={group}>
								{group}{' '}
							</Link>
					  ))
					: null}
			</nav>
			<StudentsList />
		</ViewWrapper>
	);
};
