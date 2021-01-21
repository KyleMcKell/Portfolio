import styled from "styled-components";

const NavLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: left;
	height: 5rem;
	color: var(--nord6);
	text-decoration: none;
	transition: background-color 300ms linear;

	:hover {
		background-color: var(--nord4);
		color: var(--nord1);
	}

	:hover img {
		filter: none;
	}
`;

export default NavLink;
