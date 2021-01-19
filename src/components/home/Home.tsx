import React from "react";
import { Body } from "../Body";
import { Footer } from "../Footer";
import { Navbar } from "../navbar/Navbar";

interface Props {}

const homeStyle: React.CSSProperties = {};

export const Home = (props: Props) => {
	return (
		<div style={homeStyle}>
			{/* Navbar */}
			<Navbar />
			{/* Body */}
			<Body page={"home"} />
			{/* Footer */}
			<Footer />
		</div>
	);
};
