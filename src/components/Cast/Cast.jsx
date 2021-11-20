import React from "react";
import CastCard from "../CastCard/CastCard";
import { Container } from "./Cast.styles";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const Cast = ({ credits }) => {
	const NoImage = "https://bitsofco.de/content/images/2018/12/broken-1.png";
	return (
		<Container>
			{credits?.cast?.map((actor) => (
				<CastCard
					credits={actor}
					key={actor.id}
					imageUrl={
						actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
					}
					name={actor.name ? actor.name : ""}
					character={actor.character ? actor.character : ""}
				/>
			))}
		</Container>
	);
};

export default Cast;
