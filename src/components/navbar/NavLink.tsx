import styled from "styled-components";

const NavLink = styled.a`
	display: flex;
	align-items: center;
	color: var(--nord6);
	text-decoration: none;
	height: 5rem;
	transition: color 300ms linear;

	:hover {
		color: var(--nord1);
		cursor: pointer;
	}

	:hover img {
		filter: none;
	}

	@media only screen and (orientation: landscape) and (min-width: 800px) {
		justify-content: left;
	}

	@media only screen and (orientation: landscape) and (max-width: 800px) {
		justify-content: center;
	}

	@media only screen and (orientation: portrait) {
		justify-content: center;
		display: flex;
		flex-direction: column;
	}
`;

export default NavLink;
