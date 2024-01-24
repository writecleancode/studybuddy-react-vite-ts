import { Input } from 'src/components/atoms/Input/StyledInput';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';

export const SearchBar = () => {
	return (
		<SearchBarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<h6>Teacher</h6>
			</StatusInfo>
			<Input name='search' id='search' placeholder='find student' />
		</SearchBarWrapper>
	);
};
