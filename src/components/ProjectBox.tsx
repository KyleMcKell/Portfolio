import React from 'react';
import styled from 'styled-components';
import { Project } from 'components/Projects';

interface Props {
  project: Project;
}

export const ProjectBox: React.FC<Props> = ({ project }) => {
  const handleClick = (url: string) => {
    return window.open(`${url}`, '_blank');
  };

  return (
    <ProjectContainer onClick={() => handleClick(project.url)}>
      <ProjectImg src={project.img} alt={project.name} />
      <h3>{project.name}</h3>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  width: 100%;
  max-width: 22rem;

  :hover {
    cursor: pointer;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  border: 6px solid var(--nord3point5);
  object-fit: cover;
  border-radius: 8px;
  aspect-ratio: 1/1;
`;
