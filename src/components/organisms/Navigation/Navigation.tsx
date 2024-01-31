import { useAuth } from 'src/hooks/useAuth';
import { Logo, StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
	const { handleSignOut } = useAuth();

	return (
		<Wrapper>
			<Logo>
				<p>Study Buddy</p>
			</Logo>
			<StyledLink to='/group'>Dashboard</StyledLink>
			<StyledLink to='/' onClick={handleSignOut}>
				Log out
			</StyledLink>
		</Wrapper>
	);
};
