import { Link } from "react-router-dom";
import User from "../../images/user.png";
import { Head, Logo } from "./Header.styles";
const Header = () => {
	return (
		<Head>
			<Link to="/">
				<Logo>Movie App</Logo>
			</Link>
			<img src={User} alt="" />
		</Head>
	);
};

export default Header;
