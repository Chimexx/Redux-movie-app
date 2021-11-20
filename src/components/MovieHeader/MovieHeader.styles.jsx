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
	object-fit: cover;
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

	@media screen and (max-width: 768px) {
		flex-direction: column;
		max-height: 400px;
	}
`;

export const Span = styled.span`
	color: #ffbb00;
	margin-right: 10px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
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

	@media screen and (max-width: 768px) {
		flex: none;
	}
`;
export const Poster = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	justify-content: end;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const Title = styled.div`
	font-size: 26px;
	font-weight: 400;
	margin-bottom: 5px;

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const Tagline = styled.div`
	margin-bottom: 20px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		margin-bottom: 10px;
	}
`;
export const Img = styled.img`
	width: 70%;
`;
export const Plot = styled.div`
	font-weight: 400;
	margin-bottom: 40px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		font-weight: 400;
		margin-bottom: 10px;
	}
`;
export const Details = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	padding: 10px 10px 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding: 10px;
	}
`;

export const MovieInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: flex-start;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
		flex-direction: row;
		font-size: 14px;
	}
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
