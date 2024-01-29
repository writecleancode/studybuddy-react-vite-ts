import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useStudents } from 'src/hooks/useStudents';
import { useModal } from 'src/components/organisms/Modal/useModal';
import { Modal } from 'src/components/organisms/Modal/Modal';
import { StudentType, StudentsList } from 'src/components/organisms/StudentsList/StudentsList';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';
import { StudentDetails } from 'src/components/molecules/StudentDetails';

export const Dashboard = () => {
	const [groups, setGroups] = useState([]);
	const [currentStudent, setCurrentStudent] = useState<Record<string, never> | StudentType>({});
	const { getGroups, getStudentById } = useStudents();
	const { id } = useParams();
	const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

	const handleOpenStudentDetails = async (studentId: string) => {
		const matchingStudent = await getStudentById(studentId);
		setCurrentStudent(matchingStudent);
		handleOpenModal();
	};

	useEffect(() => {
		(async () => {
			const data = await getGroups();
			setGroups(data);
		})();
	}, [getGroups]);

	if (!id && groups.length) return <Navigate to={`/group/${groups[0]}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<StyledTitle as='h2'>Group {id ? id : '-'}</StyledTitle>
				<nav>
					{groups.length
						? groups.map(group => (
								<Link to={`/group/${group}`} key={group}>
									{group}
								</Link>
						  ))
						: null}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
				{isModalOpen ? (
					<Modal handleCloseModal={handleCloseModal}>
						<StudentDetails student={currentStudent} />
					</Modal>
				) : null}
			</GroupWrapper>
		</Wrapper>
	);
};
