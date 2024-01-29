import { ReactNode } from 'react';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';

type ModalProps = {
	isOpen: boolean;
	handleCloseModal: () => void;
	children: ReactNode;
};

export const Modal = ({ isOpen, handleCloseModal, children }: ModalProps) => {
	return (
		<ModalWrapper isOpen={isOpen} onRequestClose={handleCloseModal} appElement={document.getElementById('root')!}>
			{children}
			<Button onClick={handleCloseModal}>Close</Button>
		</ModalWrapper>
	);
};
