import React from "react";
import H2Text from "components/H2Text";
import Separator from "components/Separator";
import { ProjectBox } from "./ProjectBox";
import pokedex from "images/project-images/pokedex.png";
import pricingModel from "images/project-images/pricingModel.png";
import flashcards from "images/project-images/flashcards.png";
import styled from "styled-components";

interface Props {}

export type Project = {
	name: string;
	url: string;
	description: string;
	img: string;
};

const projects: Project[] = [
	{
		name: "Pokedex",
		url: "https://kylemckell.github.io/Pokedex/",
		description: "Pokedex app made with React and PokeAPI",
		img: pokedex,
	},
	{
		name: "Java Flashcards",
		url: "https://github.com/KyleMcKell/Flashcards",
		description:
			"Java Application which imports, exports, and quizzes on flashcards",
		img: flashcards,
	},
	{
		name: "Pricing Toggle",
		url: "https://pricing-toggle-model.netlify.app/",
		description: "Small app example of a toggleable pricing plan",
		img: pricingModel,
	},
];

const ProjectContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	@media only screen and (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Projects = (props: Props) => {
	return (
		<>
			<H2Text>My Projects</H2Text>
			<Separator />
			<ProjectContainer>
				{projects.map((project) => {
					return <ProjectBox project={project} key={project.name} />;
				})}
			</ProjectContainer>
		</>
	);
};
