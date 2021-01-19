import React from "react";
import { Logo } from "./Logo";
import { NavList } from "./NavList";

interface Props {}

const navStyle: React.CSSProperties = {
	backgroundColor: "var(--nord0)",
	color: "var(--nord6)",
	margin: 0,
	position: "absolute",
	width: "100%",
};

const containerStyle: React.CSSProperties = {
	margin: "1rem 4rem",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
};

export const Navbar = (props: Props) => {
	return (
		<nav style={navStyle}>
			<div style={containerStyle}>
				<Logo />
				<NavList />
			</div>
		</nav>
	);
};
