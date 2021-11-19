import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import HeroImage from "../HeroImage/HeroImage";
import { getMovies, getSearch, isFetching, isError } from "../../redux/moviesSlice";
import { fetchAsyncMovies, fetchAsyncSearch } from "../../redux/apiCalls";
import { Container, ButtonContainer, Button, SearchBar, Input, HeaderText } from "./Home.styles";
import Spinner from "../Spinner";

const Home = () => {
	const [page, setPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");
	console.log(searchTerm);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncMovies(page));
	}, [dispatch, page]);

	useEffect(() => {
		dispatch(fetchAsyncSearch(searchTerm, page));
	}, [dispatch, searchTerm, page]);

	const moviesFetch = useSelector(getMovies);
	const searchFetch = useSelector(getSearch);
	const fetching = useSelector(isFetching);
	const error = useSelector(isError);

	let movies = null;
	if (searchTerm) {
		movies = searchFetch;
	} else {
		movies = moviesFetch;
	}

	console.log(movies);
	const pageInc = () => {
		setPage(page + 1);
		console.log(page);
	};
	const pageDec = () => {
		if (page === 1) {
			setPage(1);
		} else {
			setPage(page - 1);
		}
		console.log(page);
	};

	if (fetching) {
		return (
			<>
				<Spinner />
			</>
		);
	}

	if (error) {
		return <>Something went wrong, Please refresh the page.</>;
	}

	return (
		<Container>
			{!searchTerm && <HeroImage movies={movies} />}
			<SearchBar>
				<HeaderText>{searchTerm ? "Results" : "Movies"}</HeaderText>
				<Input
					type="text"
					placeholder="Search for movies"
					onChange={(e) =>
						setTimeout(() => {
							setSearchTerm(e.target.value);
						}, 1000)
					}
				/>
			</SearchBar>
			<MovieList movies={movies} />
			<ButtonContainer>
				<Button onClick={pageDec}>&#171; Prev Page</Button>
				<Button onClick={pageInc}>Next Page &#187;</Button>
			</ButtonContainer>
		</Container>
	);
};

export default Home;
