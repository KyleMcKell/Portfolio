import React from "react";
import { Navbar } from "components/Navbar";
import { Body } from "components/Body";
import "styles/Nord.css";
import "styles/App.css";

const App: React.FC = () => {
	return (
		<>
			<Navbar />
			<Body />
		</>
	);
};

export default App;
