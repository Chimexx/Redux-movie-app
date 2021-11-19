import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Header = styled.div`
	background: ${({ backdrop }) =>
		backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};

	background-size: 100%, cover;
	background-position: top;
	display: flex;
	justify-content: space-between;
	border-radius: 20px;
	background-color: #1a242f;
	overflow: hidden;
	background-size: cover;
	animation: animateMovieInfo 1s;

	@keyframes animateMovieInfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Span = styled.span`
	color: #ffbb00;
	margin-right: 10px;
`;
export const Info = styled.div`
	flex: 3;
	padding: 20px;
	margin-right: 20px;
	background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
	background-size: 100%, cover;
	background-position: top;
	background-size: 100%, cover;
	background-position: top;
	justify-content: space-between;
`;
export const Poster = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	justify-content: end;
`;
export const Title = styled.div`
	font-size: 26px;
	font-weight: 400;
	margin-bottom: 5px;
`;

export const Tagline = styled.div`
	margin-bottom: 20px;
`;
export const Img = styled.img`
	width: 70%;
`;
export const Plot = styled.div`
	font-weight: 400;
	margin-bottom: 40px;
`;
export const Details = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	padding: 10px 10px 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const MovieInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: flex-start;
`;
export const CastTitle = styled.div`
	background-color: #1a242f;
	height: 40px;
	border-radius: 5px;
	border-top: 2px #09f solid;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 40px;
	padding-left: 20px;
`;
