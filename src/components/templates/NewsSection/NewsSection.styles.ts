import styled from 'styled-components';
import { ViewWrapper } from 'src/components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'src/components/atoms/Button/StyledButton';

export const Wrapper = styled.div`
	grid-row: 1 / 3;
	grid-column: 3 / 4;
	display: flex;
	flex-direction: column;
	padding: 32px 48px;
	border-left: 1px solid ${({ theme }) => theme.colors.grey};
	overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h3`
	margin-right: auto;
	margin-bottom: 24px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ArticleWrapper = styled(ViewWrapper)`
	margin: 0;
	margin-bottom: 40px;
	padding: 32px 40px;
	max-width: unset;
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.darkGrey};

	${Button} {
		margin: 0;
	}
`;

export const TitleWrapper = styled.div`
	margin-bottom: 16px;

	h3 {
		margin-bottom: 2px;
		font-size: ${({ theme }) => theme.fontSize.l};
	}

	p {
		font-size: ${({ theme }) => theme.fontSize.m};
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 32px;

	p {
		font-size: 15px;
		line-height: 1.6;
	}

	img {
		margin-left: 32px;
		width: 160px;
		object-fit: cover;
	}
`;
