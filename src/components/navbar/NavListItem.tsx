import React from "react";

interface Props {
	item: string;
}

const navListItemStyle: React.CSSProperties = {
	margin: "0 0 0 1rem",
	fontSize: "1.2rem",
};

export const NavListElement = (props: Props) => {
	return <li style={navListItemStyle}>{props.item}</li>;
};
