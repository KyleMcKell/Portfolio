import React from "react";
import { Logo } from "./Logo";
import { NavList } from "./NavList";

interface Props {}

const navStyle: React.CSSProperties = {
	backgroundColor: "var(--nord0)",
	color: "var(--nord6)",
	margin: 0,
	width: "100%",
	height: "6rem",
};

const navContainerStyle: React.CSSProperties = {
	margin: "0 4rem",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	height: "100%",
};

export const Navbar = (props: Props) => {
	return (
		<nav style={navStyle}>
			<div style={navContainerStyle}>
				<Logo />
				<NavList />
			</div>
		</nav>
	);
};
