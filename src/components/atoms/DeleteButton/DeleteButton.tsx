import { DeleteIcon } from 'src/assets/icons/DeleteIcon';
import { StyledButton } from './DeleteButton.styles';

type DeleteButtonProps = Record<string, Function>;

export const DeleteButton = (props: DeleteButtonProps) => {
	return (
		<StyledButton {...props}>
			<DeleteIcon />
		</StyledButton>
	);
};
