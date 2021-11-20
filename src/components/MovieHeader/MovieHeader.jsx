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
} from "./MovieHeader.styles";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import Spinner from "../Spinner";
import Meter from "../Meter/Meter";
import { convertMoney, convertTime } from "../../converter";

const MovieHeader = ({ movie }) => {
	return (
		<div>
			{Object.keys(movie)?.length === 0 ? (
				<Spinner />
			) : (
				<Header backdrop={movie.backdrop_path}>
					<Info image={movie.backdrop_path}>
						<Title>{movie.title}</Title>
						<Tagline>
							<Span>Tagline:</Span> {movie.tagline ? movie.tagline : "Not Availabe"}
						</Tagline>
						{movie.overview.length < 300 ? (
							<Plot>
								<Span>Plot:</Span>
								{movie.overview}
							</Plot>
						) : (
							<Plot>
								<Span>Plot:</Span>
								{movie.overview.slice(0, 320)}...
							</Plot>
						)}
						<Details>
							<MovieInfo>
								<Span>Time:</Span>
								<span>{convertTime(movie.runtime)}</span>
							</MovieInfo>
							<MovieInfo>
								<Span>Genre: </Span>
								{movie.genres.map((entry) => {
									return (
										<span key={entry.id}>
											{movie.genres.length > 1 ? `${entry.name}, ` : ""}
										</span>
									);
								})}
							</MovieInfo>
							<MovieInfo>
								<Span>Status: </Span>
								<span>{movie.status}</span>
							</MovieInfo>
							<MovieInfo>
								<Span>Revenue: </Span>
								<span>{convertMoney(movie.revenue)}</span>
							</MovieInfo>
							<MovieInfo>
								<Span>Ratings: </Span>
								<Meter rating={movie.vote_average} />
							</MovieInfo>
						</Details>
					</Info>
					<Poster>
						<Img
							src={
								`${IMAGE_BASE_URL}${POSTER_SIZE}` + movie.poster_path ||
								"https://bitsofco.de/content/images/2018/12/broken-1.png"
							}
							alt=""
						/>
					</Poster>
				</Header>
			)}
		</div>
	);
};

export default MovieHeader;
