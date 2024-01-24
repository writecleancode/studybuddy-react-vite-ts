import { Button } from 'src/components/atoms/Button/StyledButton';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';

export const NewsSection = () => {
	return (
		<Wrapper>
			<NewsSectionHeader>University News Feed</NewsSectionHeader>

			<ArticleWrapper>
				<TitleWrapper>
					<h3>Title</h3>
					<p>Category</p>
				</TitleWrapper>
				<ContentWrapper>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae illum mollitia perferendis facilis
						deserunt? Sapiente, hic, delectus doloribus molestiae aspernatur eaque, iste natus odit tenetur cumque
						placeat voluptatum ut?
					</p>
				</ContentWrapper>
				<Button>Read more</Button>
			</ArticleWrapper>
			<ArticleWrapper>
				<TitleWrapper>
					<h3>Title</h3>
					<p>Category</p>
				</TitleWrapper>
				<ContentWrapper>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae illum mollitia perferendis facilis
						deserunt? Sapiente, hic, delectus doloribus molestiae aspernatur eaque, iste natus odit tenetur cumque
						placeat voluptatum ut?
					</p>
				</ContentWrapper>
				<Button>Read more</Button>
			</ArticleWrapper>
			<ArticleWrapper>
				<TitleWrapper>
					<h3>Title</h3>
					<p>Category</p>
				</TitleWrapper>
				<ContentWrapper>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae illum mollitia perferendis facilis
						deserunt? Sapiente, hic, delectus doloribus molestiae aspernatur eaque, iste natus odit tenetur cumque
						placeat voluptatum ut?
					</p>
				</ContentWrapper>
				<Button>Read more</Button>
			</ArticleWrapper>
            
		</Wrapper>
	);
};
