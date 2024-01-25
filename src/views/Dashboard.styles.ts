import styled from 'styled-components';
import { ViewWrapper } from 'src/components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const GroupWrapper = styled(ViewWrapper)`
	margin: 0;
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	max-width: 500px;

	nav a {
		display: inline-block;
		margin-left: 15px;
		padding: 5px;
		border-radius: 50px;
		width: 30px;
		height: 30px;
		background-color: white;
		color: ${({ theme }) => theme.colors.darkGrey};
		font-weight: bold;
		text-align: center;
		text-decoration: none;
	}

	nav a:hover {
		background-color: ${({ theme }) => theme.colors.lightPurple};
	}
`;
