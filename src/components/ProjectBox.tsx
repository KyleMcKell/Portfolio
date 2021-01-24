import React from "react";
import styled from "styled-components";
import { Project } from "components/Projects";

interface Props {
	project: Project;
}

const ProjectContainer = styled.div`
	height: 20rem;
	width: 15rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	:hover {
		cursor: pointer;
	}
`;

const ProjectImg = styled.img`
	height: 15rem;
	width: 15rem;
	border: 3px solid var(--nord4);
	border-radius: 5px;
	box-shadow: 3px 3px 5px var(--nord0);
`;

export const ProjectBox: React.FC<Props> = ({ project }) => {
	const handleClick = (url: string) => {
		return (window.location.href = `${url}`);
	};

	return (
		<ProjectContainer onClick={() => handleClick(project.url)}>
			<ProjectImg src={project.img} alt={project.name} />
			<h3>{project.name}</h3>
		</ProjectContainer>
	);
};
