import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';

type ModalProps = {
	handleCloseModal: () => void;
	children: ReactNode;
};

export const Modal = ({ handleCloseModal, children }: ModalProps) => {
	return createPortal(
		<ModalWrapper>
			{children}
			<Button onClick={handleCloseModal}>Close</Button>
		</ModalWrapper>,
		document.body
	);
};
