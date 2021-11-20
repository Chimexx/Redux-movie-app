import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Cast from "../Cast/Cast";
import MovieHeader from "../MovieHeader/MovieHeader";
import { CastTitle, Title } from "./MovieDetails.styles";
import { getCredits, getMovie, isFetching } from "../../redux/moviesSlice";
import { fetchAsyncCredits, fetchAsyncMovie } from "../../redux/apiCalls";
import Spinner from ".././Spinner";

const MovieDetail = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const id = location.pathname.split("/")[2];

	useEffect(() => {
		dispatch(fetchAsyncMovie(id));
		dispatch(fetchAsyncCredits(id));
	}, [dispatch, id]);

	const movie = useSelector(getMovie);
	const credits = useSelector(getCredits);
	const fetching = useSelector(isFetching);

	return (
		<>
			{fetching ? <Spinner /> : <MovieHeader movie={movie} />}
			<CastTitle>
				<Title>Cast of {movie.title}</Title>
			</CastTitle>
			{fetching ? <Spinner /> : <Cast credits={credits} />}
		</>
	);
};

export default MovieDetail;
