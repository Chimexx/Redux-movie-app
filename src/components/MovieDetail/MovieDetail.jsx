import React, { useEffect } from "react";
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from "../../redux/movieSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const dispatch = useDispatch();
	const data = useSelector(getSelectedMovieOrShow);

	useEffect(() => {
		dispatch(fetchAsyncMovieOrShowDetail(id));
	}, [dispatch, id]);

	console.log(id, data);
	return (
		<div className="movie-section">
			<div className="left-section">
				<div className="movie-title">{data.Title}</div>
				<div className="movie-plot">{data.Plot}</div>
				<div className="movie-details">
					<div className="movie-rating">{data.imdbRating}</div>
					<div className="movie-votes">{data.imdbVotes}</div>
					<div className="movie-runtime">{data.Runtime}</div>
					<div className="movie-year">{data.Released}</div>
				</div>
				<div className="movie-info">{data.Director}</div>
				<div className="movie-info">{data.Actors}</div>
				<div className="movie-info">{data.Genre}</div>
				<div className="movie-info">{data.Language}</div>
				<div className="movie-info">{data.Genre}</div>
				<div className="movieinfot">{data.Awards}</div>
			</div>
			<div className="right-section">
				<img src={data.Poster} alt="" />
			</div>
		</div>
	);
};

export default MovieDetail;
