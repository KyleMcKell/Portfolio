import React, { useState } from "react";
import { NavListElement } from "./NavListItem";

interface Props {}

const navListStyle: React.CSSProperties = {
	listStyle: "none",
	display: "flex",
};

export const NavList = (props: Props) => {
	const [items] = useState(["About", "Portfolio", "Contact"]);

	return (
		<ul style={navListStyle}>
			{items.map((item) => {
				return <NavListElement item={item} />;
			})}
		</ul>
	);
};
