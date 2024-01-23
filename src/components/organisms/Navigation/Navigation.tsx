import { Logo, StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
	return (
		<Wrapper>
			<Logo>
				<p>Study Buddy</p>
			</Logo>
            <StyledLink to='/'>Dashboard</StyledLink>
            <StyledLink to='/add-student'>Add student</StyledLink>
		</Wrapper>
	);
};
