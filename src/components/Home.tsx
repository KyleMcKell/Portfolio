import React from "react";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface Props {}

export const Home = (props: Props) => {
	return (
		<div className="container">
			{/* Navbar */}
			<Navbar />
			{/* Body */}
			<Body />
			{/* Footer */}
			<Footer />
		</div>
	);
};
