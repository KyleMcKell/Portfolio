import React from "react";
import styled from "styled-components";
import { NavElement } from "components/NavElement";

interface Props {}

const NavBar = styled.nav`
	width: 5rem;
	height: 100vh;
	position: fixed;
	transition: width 300ms ease;

	:hover {
		width: 10rem;
	}
`;

const NavBarNav = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	background: var(--nord0);
`;

export const Navbar = (props: Props) => {
	return (
		<NavBar>
			<NavBarNav>
				<NavElement>About</NavElement>
				<NavElement>About</NavElement>
				<NavElement>About</NavElement>
			</NavBarNav>
		</NavBar>
	);
};
