import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const logoStyle: React.CSSProperties = {
	fontSize: "1.7rem",
	fontWeight: "bold",
	color: "var(--nord6)",
	textDecoration: "none",
};

export const Logo = (props: Props) => {
	return (
		<Link to="/" style={logoStyle}>
			Kyle McKell
		</Link>
	);
};
