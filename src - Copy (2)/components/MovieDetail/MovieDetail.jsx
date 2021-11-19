import React, { useEffect } from "react";
import { getCredits, fetchCredits, getMovie, fetchMovie, removeDetails } from "../../redux/movieSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Cast from "../Cast/Cast";
import {
	Header,
	Title,
	Info,
	Poster,
	Tagline,
	Plot,
	Img,
	Span,
	Details,
	MovieInfo,
	CastTitle,
} from "./MovieDetails.styles";
import "./MovieDetail.scss";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const MovieDetail = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const dispatch = useDispatch();
	const credits = useSelector(getCredits);
	const data = useSelector(getMovie);
	useEffect(() => {
		dispatch(fetchMovie(id));
		dispatch(fetchCredits(id));

		//clean up function to prevent seeing the previous movie when a new movie is clicked
		return () => {
			dispatch(removeDetails());
		};
	}, [dispatch, id]);

	console.log("credits:", credits.cast);

	return (
		<>
			{Object.keys(data).length === 0 ? (
				<div className="loading">
					<h1>...Loading</h1>
				</div>
			) : (
				<Header backdrop={data.backdrop_path}>
					<Info image={data.backdrop_path}>
						<Title>{data.title}</Title>
						<Tagline>
							<Span>Tagline:</Span> {data.tagline ? data.tagline : "Not Availabe"}
						</Tagline>
						{data.overview.length < 300 ? (
							<Plot>
								<Span>Plot:</Span>
								{data.overview}
							</Plot>
						) : (
							<Plot>
								<Span>Plot:</Span>
								{data.overview.slice(0, 320)}...
							</Plot>
						)}
						<Details>
							<MovieInfo>
								<Span>Director:</Span>
								<span>{data.Director}</span>
							</MovieInfo>
							<MovieInfo>
								<Span>Genre: </Span>
								{data.genres.map((entry) => {
									return <span key={entry.id}>{entry.name}, </span>;
								})}
							</MovieInfo>
							<MovieInfo>
								<Span>Status: </Span>
								<span>{data.status}</span>
							</MovieInfo>
							<MovieInfo>
								<Span>Revenue: </Span>
								<span>${data.revenue}</span>
							</MovieInfo>
							<MovieInfo>
								<Span>Ratings: </Span>
								{data.vote_average}
							</MovieInfo>
						</Details>
					</Info>
					<Poster>
						<Img
							src={
								`${IMAGE_BASE_URL}${POSTER_SIZE}` + data.poster_path ||
								"https://bitsofco.de/content/images/2018/12/broken-1.png"
							}
							alt=""
						/>
					</Poster>
				</Header>
			)}
			<CastTitle>
				<h4>Cast for this Movie</h4>
			</CastTitle>
			<Cast credits={credits} />
		</>
	);
};

export default MovieDetail;

{
	/* <div className="movie-section">
	<div className="left-section">
		<div className="movie-title">{data.title}</div>
		<div className="movie-plot">
			<span> Tagline: </span>
			{data.tagline}
		</div>
		<div className="movie-plot">
			<span> Plot: </span>
			{data.overview}
		</div>
		<div className="movie-details">
			<div className="movie-metrics">
				<span>Ratings: </span>
				{data.vote_average}
			</div>
			<div className="movie-metrics">
				<span>Votes:</span> {data.vote_count}
			</div>
			<div className="movie-metrics">
				<span>Runtime:</span> {data.runtime}
			</div>
			<div className="movie-metrics">
				<span>Released:</span> {data.release_date}
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
			{data.genres.map((entry) => {
				return <span>{entry.name}, </span>;
			})}
		</div>
		<div className="movie-info">
			<span>Languages:</span>
			<span>{data.original_language}</span>
		</div>

		<div className="movie-info">
			<span>Status:</span>
			<span>{data.status}</span>
		</div>
		<div className="movie-info">
			<span>Revenue:</span>
			<span>{data.revenue}</span>
		</div>
		<div className="movie-info">
			<span>Popularity:</span>
			<span>{data.popularity}</span>
		</div>
	</div>
	<div className="right-section">
		<img
			src={
				`${IMAGE_BASE_URL}${POSTER_SIZE}` + data.poster_path ||
				"https://bitsofco.de/content/images/2018/12/broken-1.png"
			}
			alt=""
		/>
	</div>
</div>; */
}
