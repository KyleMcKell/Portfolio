import React from "react";
import LogoContainer from "components/LogoContainer";
import css3 from "images/logos/css3.png";
import git from "images/logos/git.png";
import html5 from "images/logos/html5.png";
import js from "images/logos/javascript.png";
import react from "images/logos/react.png";
import ts from "images/logos/typescript.png";
import TechnologyLogo from "./TechnologyLogo";
import ContentContainer from "./ContentContainer";
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

const TechText = styled.h2`
	color: var(--nord6);
	text-align: center;
	margin: 0rem 3rem;
	font-size: 1.5rem;
`;

const Separator = styled.div`
	background-color: var(--nord5);
	height: 0.5rem;
	width: 70%;
	margin-top: 0;
	margin-bottom: 1rem;
`;

export const About = (props: Props) => {
	return (
		<>
			<TechText>Hey there 🤙</TechText>
			<TechText> I'm a React Front-End Developer</TechText>
			<Separator />
			<LogoContainer>
				{logos.map((logo) => {
					return <TechnologyLogo src={logo.src} alt={logo.name} />;
				})}
			</LogoContainer>
		</>
	);
};
