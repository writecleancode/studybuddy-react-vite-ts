import styled, { keyframes } from 'styled-components';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';

const shrinkAnimation = keyframes`
    from {
        scale: 1 1;
    }
    to {
        scale: 0 1;
    }
`;

const slideAnimation = keyframes`
    from {
        transform: translateY(500%);
    }
    
    to {
        transform: translateY(0);
    }
`;

export const Wrapper = styled.div`
	position: absolute;
	left: 50%;
	bottom: 10%;
	translate: -50%;
	padding: 32px 24px 24px;
	border: 3px solid ${({ theme }) => theme.colors.lightError};
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.lightError};
	animation: ${slideAnimation} 1s ease-in-out 1 forwards, ${slideAnimation} 1s 6s ease-in-out 1 reverse forwards;
	${StyledTitle} {
		color: ${({ theme }) => theme.colors.lightError};
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 16px;
		left: 50%;
		translate: -50%;
		border-radius: 50px;
		background-color: ${({ theme }) => theme.colors.lightError};
		width: 60px;
		height: 5px;
	}
	&::before {
		opacity: 0.5;
	}
	&::after {
		transform: scaleX(1);
		transform-origin: left top;
		animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
	}
`;
