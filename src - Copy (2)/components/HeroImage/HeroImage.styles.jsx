import styled from "styled-components";

export const Wrapper = styled.div`
	border-radius: 20px;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%),
		url(${({ image }) => image}), #2c2c2c;
	background-size: 100%, cover;
	background-position: top;
	height: 300px;
	position: relative;
	animation: animateHeroImage 1s;

	@keyframes animateHeroImage {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Content = styled.div`
	padding: 100px;
	max-width: 1280px;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		padding: 0 20px;
	}
`;

export const Text = styled.div`
	z-index: 100;
	max-width: 700px;
	position: absolute;
	bottom: 40px;
	margin-right: 20px;
	min-height: 100px;
	color: #fff;

	h1 {
		font-size: 40px;

		@media screen and (max-width: 768px) {
			font-size: 22px;
		}
	}
	p {
		font-size: 18px;

		@media screen and (max-width: 768px) {
			font-size: 14px;
		}
	}
	@media screen and (max-width: 768px) {
		max-width: 100%;
	}
`;
