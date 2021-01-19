import React from "react";
import { HomeBody } from "./HomeBody";
import { Footer } from "../Footer";
import { Navbar } from "../navbar/Navbar";

interface Props {}

const homeStyle: React.CSSProperties = {
	padding: 0,
	margin: 0,
	position: "relative",
	height: "100vh",
	display: "flex",
	flexDirection: "column",
};

export const Home = (props: Props) => {
	return (
		<div style={homeStyle}>
			{/* Navbar */}
			<Navbar />
			{/* Body */}
			<HomeBody />
			{/* Footer */}
			<Footer />
		</div>
	);
};
