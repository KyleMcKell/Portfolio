import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const logoStyle: React.CSSProperties = {
	fontSize: "3.5rem",
	fontWeight: 900,
	color: "var(--nord8)",
	textDecoration: "none",
	fontFamily: "Source Code Pro",
};

export const Logo = (props: Props) => {
	return (
		<Link to="/" style={logoStyle}>
			K
		</Link>
	);
};
