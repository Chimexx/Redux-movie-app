import { Link } from "react-router-dom";
import User from "../../images/user.png";
import "./Header.scss";

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<div className="logo">Movie App</div>
			</Link>
			<div className="user-image">
				<img id="header-img" src={User} alt="" />
			</div>
		</div>
	);
};

export default Header;
