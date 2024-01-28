import { createPortal } from 'react-dom';
import { StudentDetails } from 'src/components/molecules/StudentDetails/StudentDetails';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';
import { StudentType } from 'src/components/organisms/StudentsList/StudentsList';

type ModalProps = {
	student: StudentType | Record<string, never>;
	handleCloseModal: () => void;
};

export const Modal = ({ student, handleCloseModal }: ModalProps) => {
	return createPortal(
		<ModalWrapper>
			<StudentDetails student={student} />
			<Button onClick={handleCloseModal}>Close</Button>
		</ModalWrapper>,
		document.body
	);
};
