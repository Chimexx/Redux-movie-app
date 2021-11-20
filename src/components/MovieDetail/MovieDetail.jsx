import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Cast from "../Cast/Cast";
import MovieHeader from "../MovieHeader/MovieHeader";
import { CastTitle, Title } from "./MovieDetails.styles";
import { getState } from "../../redux/moviesSlice";
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

	const { movie, credits, isFetching } = useSelector(getState);

	return (
		<>
			{isFetching ? <Spinner /> : <MovieHeader movie={movie} />}
			<CastTitle>
				<Title>Cast of {movie.title}</Title>
			</CastTitle>
			{isFetching ? <Spinner /> : <Cast credits={credits} />}
		</>
	);
};

export default MovieDetail;
