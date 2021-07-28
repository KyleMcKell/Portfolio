import React from 'react';
import styled from 'styled-components';
import { Project } from 'components/Projects';

interface Props {
	project: Project;
}

const ProjectContainer = styled.div`
	height: 20rem;
	width: 15rem;
	max-height: 20rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0.5rem;

	:hover {
		cursor: pointer;
	}
`;

const ProjectImg = styled.img`
	height: 90%;
	max-height: 15rem;
	width: 100%;
	border: 6px solid var(--nord15);
	border-radius: 8px;
	box-shadow: 7px 8px 5px var(--nord0);
`;

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
