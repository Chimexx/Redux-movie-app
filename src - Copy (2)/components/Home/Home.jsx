import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getMovies, removeDetails } from "../../redux/movieSlice";
import "./Home.scss";
import HeroImage from "../HeroImage/HeroImage";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";

const Home = () => {
	const [pageCount, setPageCount] = useState(2);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies(pageCount));

		return () => {
			dispatch(removeDetails());
		};
	}, [dispatch, pageCount]);

	dispatch(fetchMovies(1));

	const pageIncr = () => {
		setPageCount(pageCount + 1);
		console.log(pageCount);
		console.log("clicked");
	};
	return (
		<div className="home">
			{/* <HeroImage /> */}

			<div className="banner-img"></div>
			<MovieList />
			<button className="next" onClick={pageIncr}>
				Next Page &gt;
			</button>
		</div>
	);
};

export default Home;
