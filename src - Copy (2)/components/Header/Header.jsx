import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import User from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/movieSlice";

const Header = () => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState(null);

	useEffect(() => {
		const searchHandler = () => {
			dispatch(fetchMovies(searchTerm));
		};
		searchHandler();
	}, [searchTerm, dispatch]);

	return (
		<div className="header">
			<Link to="/">
				<div className="logo">Movie App</div>
			</Link>
			<div className="search">
				<input
					type="text"
					placeholder="Search Movie or Tv show"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img id="header-img" src={User} alt="" />
			</div>
		</div>
	);
};

export default Header;
