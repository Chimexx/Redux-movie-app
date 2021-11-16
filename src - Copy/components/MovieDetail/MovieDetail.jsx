import React, { useEffect } from "react";
import {
	fetchAsyncMovieOrShowDetail,
	getSelectedMovieOrShow,
	removeSelectedMovieOrShow,
} from "../../redux/movieSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "./MovieDetail.scss";

const MovieDetail = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const dispatch = useDispatch();
	const data = useSelector(getSelectedMovieOrShow);
	useEffect(() => {
		dispatch(fetchAsyncMovieOrShowDetail(id));

		//clean up function to prevent seeing the previous movie when a new movie is clicked
		return () => {
			dispatch(removeSelectedMovieOrShow());
		};
	}, [dispatch, id]);

	console.log(id, data);

	return (
		<>
			{Object.keys(data).length === 0 ? (
				<div className="loading">
					<h1>...Loading</h1>
				</div>
			) : (
				<div className="movie-section">
					<div className="left-section">
						<div className="movie-title">{data.Title}</div>
						<div className="movie-plot">
							<span> Plot: </span>
							{data.Plot}
						</div>
						<div className="movie-details">
							<div className="movie-metrics">
								<span> IMDB Ratings: </span>
								{data.imdbRating}
							</div>
							<div className="movie-metrics">
								<span>IMDB Votes:</span> {data.imdbVotes}
							</div>
							<div className="movie-metrics">
								<span>Runtime:</span> {data.Runtime}
							</div>
							<div className="movie-metrics">
								<span>Released:</span> {data.Released}
							</div>
						</div>
						<div className="movie-info">
							<span>Director:</span>
							<span>{data.Director}</span>
						</div>
						<div className="movie-info">
							<span>Stars: </span>
							<span>{data.Actors}</span>
						</div>
						<div className="movie-info">
							<span>Genre:</span>
							<span>{data.Genre}</span>
						</div>
						<div className="movie-info">
							<span>Languages:</span>
							<span>{data.Language}</span>
						</div>
						<div className="movie-info">
							<span>Awards:</span>
							<span>{data.Awards}</span>
						</div>
					</div>
					<div className="right-section">
						<img
							src={data.Poster || "https://bitsofco.de/content/images/2018/12/broken-1.png"}
							alt=""
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default MovieDetail;
