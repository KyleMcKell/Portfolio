import React from "react";

interface Props {}

const navStyle: React.CSSProperties = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
};

export const Navbar = (props: Props) => {
	return (
		<nav style={navStyle}>
			<div className="logo">Kyle McKell</div>
			<div className="routes">
				<ul>
					<li>About</li>
					<li>Portfolio</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>
	);
};
