import React from "react";
import { Body } from "./HomeBody";
import { Footer } from "../Footer";
import { Navbar } from "../navbar/Navbar";

interface Props {}

export const Home = (props: Props) => {
	return (
		<>
			{/* Navbar */}
			<Navbar />
			{/* Body */}
			<Body />
			{/* Footer */}
			<Footer />
		</>
	);
};
