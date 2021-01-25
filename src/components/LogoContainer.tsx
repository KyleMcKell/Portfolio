import styled from "styled-components";

const LogoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;

	@media only screen and (max-width: 1000px) {
		display: inline-block;
		text-align: center;
	}
`;

export default LogoContainer;
