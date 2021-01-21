import styled from "styled-components";

const TechnologyLogo = styled.img`
	width: 80px;
	height: 80px;
	filter: grayscale(100%);
	transition: filter ease-in-out 300ms;

	:hover {
		filter: grayscale(0%);
	}
`;

export default TechnologyLogo;
