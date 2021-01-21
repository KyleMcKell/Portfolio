import styled from "styled-components";

const NavLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: left;
	color: var(--nord6);
	text-decoration: none;
	height: 5rem;
	transition: color 300ms linear;

	:hover {
		color: var(--nord1);
	}

	:hover img {
		filter: none;
	}
`;

export default NavLink;
