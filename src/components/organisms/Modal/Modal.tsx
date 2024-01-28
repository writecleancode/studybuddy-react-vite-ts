import { createPortal } from 'react-dom';
import { StudentDetails } from 'src/components/molecules/StudentDetails';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';
import { StudentType } from 'src/components/organisms/StudentsList/StudentsList';

type ModalProps = {
	currentStudent: StudentType | Record<string, never>;
	handleCloseModal: () => void;
};

export const Modal = ({ currentStudent, handleCloseModal }: ModalProps) => {
	return createPortal(
		<ModalWrapper>
			<StudentDetails currentStudent={currentStudent} />
			<Button onClick={handleCloseModal}>Close</Button>
		</ModalWrapper>,
		document.body
	);
};
