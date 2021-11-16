import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/movieSlice";
import "./Home.scss";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMovies(1));
	}, [dispatch]);
	return (
		<div className="home">
			<div className="banner-img"></div>
			<MovieList />
		</div>
	);
};

export default Home;
