import React from "react";
import { getMovies } from "../../redux/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

const MovieList = () => {
	const movies = useSelector(getMovies);

	return (
		<div>
			<div className="movie-container">
				<div className="movie-header">
					<h4>Movies</h4>
				</div>
				<div className="movie-wrapper">
					{movies.results?.map((movie) => {
						return <MovieCard key={movie.id} movie={movie} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
