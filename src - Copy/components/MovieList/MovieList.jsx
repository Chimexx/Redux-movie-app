import React from "react";
import { getAllMovies, getAllShows } from "../../redux/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

const MovieList = () => {
	const movies = useSelector(getAllMovies);
	const shows = useSelector(getAllShows);

	return (
		<div>
			<div className="movie-container">
				<div className="movie-header">
					<h4>Movies</h4>
				</div>
				<div className="movie-wrapper">
					{movies.Search?.map((movie) => {
						return <MovieCard key={movie.imdbID} movie={movie} />;
					})}
				</div>
				<div className="movie-header">
					<h4>Series</h4>
				</div>
				<div className="movie-wrapper">
					{shows.Search?.map((movie) => {
						return <MovieCard key={movie.imdbID} movie={movie} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
