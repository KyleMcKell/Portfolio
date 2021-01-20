import React from "react";

interface Props {}

const footerStyle: React.CSSProperties = {
	backgroundColor: "var(--nord2)",
	height: "15rem",
	width: "100%",
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
};

export const Footer = (props: Props) => {
	return (
		<footer style={footerStyle}>
			<div className="quote"></div>
			<div className="links"></div>
		</footer>
	);
};
