import React from "react";
import { useSelector } from "react-redux";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
import { getMovies } from "../../redux/movieSlice";
import { Wrapper, Content, Text } from "../HeroImage/HeroImage.styles";

const HeroImage = () => {
	const movies = useSelector(getMovies);
	console.log(movies);
	const image = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`;
	const title = movies.results[0].title;
	const text = movies.results[0].overview;

	return (
		<Wrapper image={image}>
			<Content>
				<Text>
					<h1>{title}</h1>
					<p>{text}</p>
				</Text>
			</Content>
		</Wrapper>
	);
};

export default HeroImage;
