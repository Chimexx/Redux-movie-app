import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { Card, Img } from "./MovieCard.styles";
const MovieCard = ({ movie }) => {
	return (
		<Link to={`/movie/${movie.id}`}>
			<Card>
				<Img
					src={
						`${IMAGE_BASE_URL}${POSTER_SIZE}` + movie.poster_path ||
						"https://bitsofco.de/content/images/2018/12/broken-1.png"
					}
					alt="movie poster"
				/>
			</Card>
		</Link>
	);
};

export default MovieCard;
