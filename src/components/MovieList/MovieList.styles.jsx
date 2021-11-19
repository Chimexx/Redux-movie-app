import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 15px;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}
`;
