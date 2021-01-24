import React, { useState } from "react";
import { Navbar } from "components/navbar/Navbar";
import { Body } from "components/Body";
import { Header } from "components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
	font-family: "Fira Code", monospace, Arial, sans-serif;
	font-size: 16px;
	--nord0: #2e3440;
	--nord1: #3b4252;
	--nord2: #434c5e;
	--nord3: #4c566a;
	--nord4: #d8dee9;
	--nord5: #e5e9f0;
	--nord6: #eceff4;
	--nord7: #8fbcbb;
	--nord8: #88c0d0;
	--nord9: #81a1c1;
	--nord10: #5e81ac;
	--nord11: #bf616a;
	--nord12: #d08770;
	--nord13: #ebcb8b;
	--nord14: #a3be8c;
	--nord15: #b48ead;
}

body {
	padding: 0;
	margin: 0;
	overflow-x: hidden;
	background-size: 400% 400%;
	
	background-image: linear-gradient(
		-140deg,
		var(--nord3),
		var(--nord1)
	);
	animation: gradient 45s ease infinite
}

@keyframes gradient {
	0% {
		background-position: 0%
	}
	50% {
		background-position: 100%
	}
	100% {
		background-position: 0%
	}
}
`;

const App: React.FC = () => {
	const [content, setContent] = useState("about");

	return (
		<>
			<GlobalStyle />
			<Navbar setContent={setContent} />
			<Header />
			<Body content={content} />
		</>
	);
};

export default App;
