import styled from "styled-components";

export const Logo = styled.div`
	font-weight: 100;
	font-size: 30px;
	font-family: "Praise", cursive;
	color: #bbb;

	@media screen and (max-width: 768px) {
		border-bottom: 1px solid #555;
		padding: 0 100px;
	}
`;

export const Links = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
`;
export const LinkItem = styled.div`
	margin: 0 20px;
	color: #bbb;

	&:hover {
		text-decoration: underline;
		text-decoration-color: #ffc400;
	}

	@media screen and (max-width: 768px) {
		font-size: 14px;
		margin: 5px 10px;
		text-align: center;
	}
`;
export const Container = styled.div`
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
