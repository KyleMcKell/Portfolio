import styled from "styled-components";

const NavBarNav = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	height: 100%;
	align-items: center;

	@media only screen and (orientation: landscape) {
		flex-direction: column;
	}

	@media only screen and (orientation: portrait) {
		flex-direction: row;
		justify-content: center;
	}
`;

export default NavBarNav;
