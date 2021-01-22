import React from "react";
import LogoContainer from "components/LogoContainer";
import css3 from "images/logos/css3.png";
import git from "images/logos/git.png";
import html5 from "images/logos/html5.png";
import js from "images/logos/javascript.png";
import react from "images/logos/react.png";
import ts from "images/logos/typescript.png";
import TechnologyLogo from "./TechnologyLogo";
import styled from "styled-components";

interface Props {}

interface logo {
	src: any;
	name: string;
}

const logos: logo[] = [
	{
		src: html5,
		name: "html5",
	},
	{
		src: css3,
		name: "css3",
	},
	{
		src: js,
		name: "javascript",
	},
	{
		src: ts,
		name: "typescript",
	},
	{
		src: react,
		name: "react",
	},
	{
		src: git,
		name: "git",
	},
];

const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 30vh;
	align-items: center;
	justify-content: space-evenly;
	background-color: var(--nord4);
	margin: 0;
	padding: 0;
	border-bottom: 6px var(--nord13) solid;
	border-top: 6px var(--nord12) solid;
`;

const TechText = styled.h2`
	color: var(--nord2);
	text-align: center;
	margin: 0rem 3rem;
	font-size: 1.25rem;
`;

export const About = (props: Props) => {
	return (
		<AboutContainer>
			<TechText>
				Hey there 🤙 I'm a Front-End Developer specializing in React
				applications with TypeScript
			</TechText>
			<LogoContainer>
				{logos.map((logo) => {
					return <TechnologyLogo src={logo.src} alt={logo.name} />;
				})}
			</LogoContainer>
		</AboutContainer>
	);
};
