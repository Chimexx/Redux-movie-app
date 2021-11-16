import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux/movieSlice";

const Home = () => {
	const searchWord = "lost";
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncMovies(searchWord));
		dispatch(fetchAsyncShows(searchWord));
	}, [dispatch]);
	return (
		<div>
			<div className="banner-img"></div>
			<MovieList />
		</div>
	);
};

export default Home;
