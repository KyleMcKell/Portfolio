import React from "react";
import styled from "styled-components";
import { Project } from "components/Projects";

interface Props {
	project: Project;
}

export const ProjectBox: React.FC<Props> = ({ project }) => {
	return <div>{project.name}</div>;
};
