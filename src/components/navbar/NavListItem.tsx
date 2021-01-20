import React from "react";
import { Link } from "react-router-dom";

interface Props {
	item: string;
}

const navListItemStyle: React.CSSProperties = {
	margin: "0 0 0 2rem",
	fontSize: "1.2rem",
	color: "var(--nord6)",
	textDecoration: "none",
	fontWeight: "bold",
};

export const NavListElement = (props: Props) => {
	return (
		<Link style={navListItemStyle} to={`/${props.item}`}>
			<li>{props.item}</li>
		</Link>
	);
};
