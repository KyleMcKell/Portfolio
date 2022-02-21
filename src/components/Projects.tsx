import React from 'react';
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
    name: 'Aeropress Tracker',
    url: 'https://aeropresstracker.com/',
    description: 'An app to track aeropress brews to make the perfect one!',
    img: aeropressTracker,
  },
  {
    name: 'Splitter',
    url: 'https://kylemckell.github.io/Tip-calculator/',
    description: 'Tip splitting app that uses vanilla HTML, CSS, and JS',
    img: splitter,
  },
  {
    name: 'Pokedex',
    url: 'https://kylemckell.github.io/Pokedex/',
    description: 'Pokedex app made with React and PokeAPI',
    img: pokedex,
  },
];

export const Projects = (props: Props) => {
  return (
    <>
      <H2Text>My Projects</H2Text>
      <ProjectContainer>
        {projects.map((project) => {
          return <ProjectBox project={project} key={project.name} />;
        })}
      </ProjectContainer>
    </>
  );
};

const ProjectContainer = styled.div`
  padding: 1rem;
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: clamp(8px, 8px + 10vw, 32px);
  flex-wrap: wrap;
`;

const H2Text = styled.h2`
  color: var(--nord6);
  text-align: center;
  margin: 1.5rem 3rem;
  font-size: 1.5rem;
  padding-top: 1rem;
`;
