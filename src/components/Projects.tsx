import React from 'react';
import H2Text from 'components/H2Text';
import Separator from 'components/Separator';
import { ProjectBox } from './ProjectBox';
import pokedex from 'images/project-images/pokedex.png';
import aeropressTracker from 'images/project-images/aeropresstracker.png';
import splitter from 'images/project-images/splitter.png';
import styled from 'styled-components';

interface Props {}

export type Project = {
	name: string;
	url: string;
	description: string;
	img: string;
};

const projects: Project[] = [
	{
		name: 'Splitter',
		url: 'https://kylemckell.github.io/Tip-calculator/',
		description: 'Tip splitting app that uses vanilla HTML, CSS, and JS',
		img: splitter,
	},
	{
		name: 'Aeropress Tracker',
		url: 'https://aeropresstracker.com/',
		description: 'An app to track aeropress brews to make the perfect one!',
		img: aeropressTracker,
	},
	{
		name: 'Pokedex',
		url: 'https://kylemckell.github.io/Pokedex/',
		description: 'Pokedex app made with React and PokeAPI',
		img: pokedex,
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
