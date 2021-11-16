import React from "react";
import { Container, CardTop, CardBottom, Img, Name, Character, Span } from "./CastCard.styles";

const CastCard = ({ imageUrl, name, character }) => {
	return (
		<Container>
			<CardTop>
				<Img src={imageUrl} alt="" />
			</CardTop>
			<CardBottom>
				<Name>
					<Span>Name: </Span> {name}
				</Name>
				<Character>
					<Span>Character: </Span> {character}
				</Character>
			</CardBottom>
		</Container>
	);
};

export default CastCard;
