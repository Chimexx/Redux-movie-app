import React from "react";
import { Link } from "react-router-dom";
import { Links, Logo, LinkItem, Container } from "./Footer.styles";

const Footer = () => {
	return (
		<Container>
			<Link to="/">
				<Logo>WebFlyck</Logo>
			</Link>

			<Links>
				<Link to="/">
					<LinkItem>Privacy</LinkItem>
				</Link>
				<Link to="/">
					<LinkItem>FAQ</LinkItem>
				</Link>
				<Link to="/">
					<LinkItem>Contact Us</LinkItem>
				</Link>
				<Link to="/">
					<LinkItem>Terms of Use</LinkItem>
				</Link>
			</Links>
		</Container>
	);
};

export default Footer;
