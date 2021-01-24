import React from "react";
import styled from "styled-components";
import NavListElement from "components/navbar/NavListElement";
import NavBarNav from "components/navbar/NavbarNav";
import NavLink from "components/navbar/NavLink";
import NavListImg from "components/navbar/NavListImg";
import NavLinkText from "components/navbar/NavLinkText";
import crow from "images/crow.png";
import feather from "images/feather.png";
import code from "images/code.png";
import mountain from "images/mountain.png";

interface Props {
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar = styled.nav`
	width: 5rem;
	height: 100vh;
	position: fixed;
	transition: width 200ms ease-out;
	background: var(--nord0);

	:hover {
		width: 20rem;
	}

	:hover span {
		display: inline;
	}
`;

interface navbarElement {
	img: any;
	text: string;
	src: string;
}

const navbarElements: navbarElement[] = [
	{
		img: crow,
		text: "Kyle McKell",
		src: "",
	},
	{
		img: mountain,
		text: "About",
		src: "about",
	},
	{
		img: code,
		text: "Portfolio",
		src: "portfolio",
	},
	{
		img: feather,
		text: "Contact",
		src: "contact",
	},
];

export const Navbar = (props: Props) => {
	const handleClick = (src: string) => {
		props.setContent(src);
	};

	return (
		<NavBar>
			<NavBarNav>
				{navbarElements.map((el) => {
					return (
						<NavListElement>
							<NavLink onClick={() => handleClick(el.src)}>
								<NavListImg src={`${el.img}`} alt={"ah shoot"} />
								<NavLinkText>{el.text}</NavLinkText>
							</NavLink>
						</NavListElement>
					);
				})}
			</NavBarNav>
		</NavBar>
	);
};
