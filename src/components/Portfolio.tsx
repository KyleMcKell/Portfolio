import React from "react";
import H2Text from "components/H2Text";
import Separator from "components/Separator";

interface Props {}

interface Project {
	name: string;
	url: string;
	description: string;
	image: any;
}

const projects: Project[] = [
	{
		name: "Pokedex",
		url: "https://kylemckell.github.io/Pokedex/",
		description: "Pokedex app made with React and PokeAPI",
		image: "",
	},
];

export const Portfolio = (props: Props) => {
	return (
		<>
			<H2Text>My Projects</H2Text>
			<Separator />
			<div>
				{projects.map((project) => {
					return <div>{project.name}</div>;
				})}
			</div>
		</>
	);
};
