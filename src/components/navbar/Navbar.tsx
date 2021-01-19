import React from "react";
import { Logo } from "./Logo";
import { NavList } from "./NavList";

interface Props {}

const navStyle: React.CSSProperties = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
};

export const Navbar = (props: Props) => {
	return (
		<nav style={navStyle}>
			<Logo />
			<NavList />
		</nav>
	);
};
