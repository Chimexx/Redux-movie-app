import styled from "styled-components";

export const Head = styled.div`
	background-color: #1a242f;
	height: 50px;
	padding: 0 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	img {
		width: 30px;
		margin-right: 0px;
	}

	a {
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		height: 40px;
		padding: 0 10px;
	}
`;
export const Logo = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	font-weight: 100;
	font-size: 30px;
	font-family: "Praise", cursive;

	@media screen and (max-width: 768px) {
		font-size: 30px;
	}
`;
