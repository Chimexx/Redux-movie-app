import styled from "styled-components";

export const CastTitle = styled.div`
	background-color: #1a242f;
	height: 40px;
	border-radius: 5px;
	border-top: 2px #09f solid;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 40px;
	padding: 0 20px;

	@media screen and (max-width: 768px) {
		padding: 0 10px;
		margin-top: 20px;
	}
`;
export const Title = styled.h4`
	font-size: 13px;
	font-weight: 400;
`;
