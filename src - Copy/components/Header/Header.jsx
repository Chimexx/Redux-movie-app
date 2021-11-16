import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import User from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux/movieSlice";

const Header = () => {
	const dispatch = useDispatch();
	const [searchWord, setSearchWord] = useState("");
	console.log(searchWord);

	useEffect(() => {
		const searchHandler = () => {
			if (searchWord.length === 0) {
				return;
			} else {
				dispatch(fetchAsyncMovies(searchWord));
				dispatch(fetchAsyncShows(searchWord));
				// setSearchWord("");
				// return () => {
				// 	dispatch(removeSelectedMovieOrShow());
				// };
			}
		};
		searchHandler();
	}, [searchWord, dispatch]);

	return (
		<div className="header">
			<Link to="/">
				<div className="logo">Movie App</div>
			</Link>
			<div className="search">
				<input
					type="text"
					placeholder="Search Movie or Tv show"
					onChange={(e) => setSearchWord(e.target.value)}
				/>
				<img id="header-img" src={User} alt="" />
			</div>
		</div>
	);
};

export default Header;
