import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Wrapper } from "./MovieList.styles.jsx";

const MovieList = ({ movies }) => {
	return (
		<Wrapper>
			{movies.results?.map((movie) => {
				return <MovieCard key={movie.id} movie={movie} />;
			})}
		</Wrapper>
	);
};

export default MovieList;
