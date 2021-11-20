import { Wrapper, Content, Text } from "../HeroImage/HeroImage.styles";
import Spinner from "../Spinner";

const HeroImage = ({ image, title, text, fetching }) => {
	if (fetching) {
		return (
			<>
				<Spinner />
			</>
		);
	}
	return (
		<>
			<Wrapper image={image}>
				<Content>
					<Text>
						<h1>{title}</h1>
						<p>{text}</p>
					</Text>
				</Content>
			</Wrapper>
		</>
	);
};

export default HeroImage;
