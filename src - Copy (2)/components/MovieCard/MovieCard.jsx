import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const MovieCard = ({ movie }) => {
	return (
		<Link to={`/movie/${movie.id}`}>
			<div className="movie-card">
				<div className="movie-poster">
					<img
						className="movie-img"
						src={
							`${IMAGE_BASE_URL}${POSTER_SIZE}` + movie.poster_path ||
							"https://bitsofco.de/content/images/2018/12/broken-1.png"
						}
						alt="movie poster"
					/>
				</div>
				{/* <div className="movie-info">
					<h4>{movie.original_title}</h4>
					<p>Year: {movie.release_date}</p>
				</div> */}
			</div>
		</Link>
	);
};

export default MovieCard;
