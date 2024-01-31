import { Logo, StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
	return (
		<Wrapper>
			<Logo>
				<p>Study Buddy</p>
			</Logo>
			<StyledLink to='/group'>Dashboard</StyledLink>
			<StyledLink to='/' onClick={() => localStorage.removeItem('token')}>
				Log out
			</StyledLink>
		</Wrapper>
	);
};
