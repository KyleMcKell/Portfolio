import React from "react";
import styled from "styled-components";
import NavListElement from "components/navbar/NavListElement";
import NavBarNav from "components/navbar/NavbarNav";
import NavLink from "components/navbar/NavLink";
import NavListImg from "components/navbar/NavListImg";
import NavLinkText from "components/navbar/NavLinkText";

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

interface navbarElement {
	img: string;
	text: string;
}

const navbarElements: navbarElement[] = [
	{
		img: "crow",
		text: "hello",
	},
	{
		img: "crow",
		text: "hello",
	},
	{
		img: "crow",
		text: "hello",
	},
];

export const Navbar = (props: Props) => {
	return (
		<NavBar>
			<NavBarNav>
				{navbarElements.map((el) => {
					<NavListElement>
						<NavLink>
							{el.text}
							<NavListImg src={`images/${el.img}.svg`} alt={el.img} />
							<NavLinkText></NavLinkText>
						</NavLink>
					</NavListElement>;
				})}
			</NavBarNav>
		</NavBar>
	);
};
