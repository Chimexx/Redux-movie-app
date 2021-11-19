import styled from "styled-components";

export const Img = styled.img`
	width: 100%;
	max-width: 720px;
	object-fit: cover; //to cover the thumbnail
	border-radius: 20px;
`;
export const Card = styled.div`
	cursor: pointer;
	margin-top: 20px;
	border-radius: 20px;
	transition: all ease-in-out 0.3s;

	&:hover {
		transform: scale(1.1);
		transition: all ease-in-out 0.3s;
	}
`;
