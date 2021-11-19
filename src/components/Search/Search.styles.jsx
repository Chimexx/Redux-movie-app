import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100px;
	background: var(--darkGrey);
	padding: 0 100px;

	@media screen and (max-width: 768px) {
		height: 60px;
		padding: 0 20px;
	}
`;
export const Content = styled.div`
	position: relative;
	max-width: var(--maxWidth);
	width: 98%;
	height: 55px;
	background: var(--medGrey);
	margin: 0 auto;
	border-radius: 50px;
	color: var(--white);

	@media screen and (max-width: 768px) {
		height: 30px;
	}

	img {
		position: absolute;
		left: 15px;
		top: 14px;
		width: 30px;

		@media screen and (max-width: 768px) {
			position: absolute;
			top: 6px;
			left: 7px;
			width: 20px;
		}
	}
	input {
		font-size: 28px;
		position: absolute;
		left: 0;
		margin: 8px 0;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
		background: transparent;
		height: 40px;
		color: var(--white);

		@media screen and (max-width: 768px) {
			font-size: 16px;
			position: absolute;
			top: -13px;
			padding: 0 0 0 40px;
			border: 0;
			width: 95%;
			background: transparent;
			height: 40px;
		}

		:focus {
			outline: none;
		}
	}
`;
