import React from "react";
import styled from "styled-components";
import NavListElement from "components/navbar/NavListElement";
import NavBarNav from "components/navbar/NavbarNav";
import NavLink from "components/navbar/NavLink";
import NavListImg from "components/navbar/NavListImg";
import NavLinkText from "components/navbar/NavLinkText";
import crow from "images/nav-icons/crow.png";
import feather from "images/nav-icons/feather.png";
import code from "images/nav-icons/code.png";
import mountain from "images/nav-icons/mountain.png";
import github from "images/nav-icons/github.png";

interface Props {
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar = styled.nav`
	background: var(--nord0);
	z-index: 100;

	@media only screen and (orientation: landscape) and (min-width: 1000px) {
		width: 5rem;
		height: 100vh;
		position: fixed;
		transition: width 200ms ease-out;

		:hover {
			width: 20rem;
		}

		:hover span {
			display: inline;
		}
	}

	@media only screen and (orientation: landscape) and (max-width: 1000px) {
		width: 5rem;
		height: 100vh;
		position: fixed;
	}

	@media only screen and (orientation: portrait) {
		height: 10vh;
		width: 100vw;
		top: 0;
		right: 0;
		transition: height 200ms ease-out;
		margin: 0;
	}
`;

interface navbarElement {
	img: string;
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
		text: "Projects",
		src: "projects",
	},
	{
		img: feather,
		text: "Contact",
		src: "contact",
	},
	{
		img: github,
		text: "My GitHub",
		src: "https://github.com/kylemckell",
	},
];

export const Navbar = (props: Props) => {
	const handleClick = (src: string) => {
		if (src.split("/").length === 1) {
			props.setContent(src);
		} else {
			return window.open(`${src}`, "_blank");
		}
	};

	return (
		<NavBar>
			<NavBarNav>
				{navbarElements.map((el) => {
					return (
						<NavListElement key={`${el.text}element`}>
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
