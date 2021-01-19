import React from "react";

interface Props {}

const homeBodyStyle: React.CSSProperties = {
	backgroundColor: "var(--nord4)",
	marginTop: "6rem",
	height: "100%",
	width: "100%",
};

export const HomeBody = (props: Props) => {
	return (
		<main style={homeBodyStyle}>
			<div className="about"></div>
			<div className="technologies"></div>
			<div className="projects"></div>
		</main>
	);
};
