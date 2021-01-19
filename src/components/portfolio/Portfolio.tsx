import React from "react";
import { Body } from "../Body";
import { Footer } from "../Footer";
import { Navbar } from "../navbar/Navbar";

interface Props {}

export const Portfolio = (props: Props) => {
	return (
		<>
			{/* Navbar */}
			<Navbar />
			{/* Body */}
			<Body page={"portfolio"} />
			{/* Footer */}
			<Footer />
		</>
	);
};
