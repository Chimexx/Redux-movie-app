import styled from "styled-components";

export const Container = styled.div`
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
export const ButtonContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	padding: 0 40px;

	@media screen and (max-width: 768px) {
		padding: 0px;
	}
`;

export const Button = styled.div`
	padding: 0 20px;
	padding-top: 5px;
	height: 40px;
	font-size: 18px;
	font-weight: 400;
	border-radius: 5px;
	border: none;
	max-width: 150px;
	background-color: #1a242f;
	color: #eee;
	border-top: 2px solid #eee;
	transition: all ease-in-out 0.3s;
	cursor: pointer;

	&:hover {
		color: #0084ff;
		border-top: 2px solid #0084ff;
	}

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const SearchBar = styled.div`
	background-color: #1a242f;
	height: 40px;
	border-radius: 5px;
	border-top: 2px #09f solid;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`;
export const HeaderText = styled.h4`
	font-size: 20px;
	align-items: center;
	text-justify: center;
	padding: 0 10px;
	color: #09f;
`;
export const Spinner = styled.div`
	margin-top: 5rem;
	margin-bottom: 5rem;
	display: flex;
	margin-left: auto;
	margin-right: 0;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.input`
	height: 30px;
	min-width: 200px;
	width: 300px;
	border-radius: 50px;
	border: none;
	padding-left: 20px;
	font-size: 16px;
	background-color: #0f171e;
	color: #09f;
	font-weight: 400;
	outline: #09f;
	padding-bottom: 2px;
	margin-right: 30px;

	input:focus {
		outline: none;
		border: #09f;
	}

	@media screen and (max-width: 768px) {
		width: 100px;
		min-width: 150px;
		font-size: 14px;
		padding-left: 10px;
		padding-right: 10px;
		margin-right: 10px;
	}
`;
