import React from "react";
import styled from "styled-components";
import { NavElement } from "components/navbar/NavElement";

interface Props {}

const NavBar = styled.nav`
	width: 5rem;
	height: 100vh;
	position: fixed;
	transition: width 300ms ease;

	:hover {
		width: 16rem;
	}

	:hover span {
		display: inline;
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
				<NavElement />
				<NavElement />
				<NavElement />
			</NavBarNav>
		</NavBar>
	);
};
