import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";
import "./styles/Nord.css";
import "./styles/App.css";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/contact" exact component={Contact} />
				<Route path="/portfolio" exact component={Portfolio} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
