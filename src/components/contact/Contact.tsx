import React from "react";
import { Body } from "../Body";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";

interface Props {}

export const Contact = (props: Props) => {
	return (
		<>
			{/* Navbar */}
			<Navbar />
			{/* Body */}
			<Body page={"contact"} />
			{/* Footer */}
			<Footer />
		</>
	);
};
