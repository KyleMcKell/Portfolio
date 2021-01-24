import React from "react";
import LogoContainer from "components/LogoContainer";
import css3 from "images/logos/css3.png";
import git from "images/logos/git.png";
import html5 from "images/logos/html5.png";
import js from "images/logos/javascript.png";
import react from "images/logos/react.png";
import ts from "images/logos/typescript.png";
import TechnologyLogo from "./TechnologyLogo";
import H2Text from "./H2Text";
import Separator from "./Separator";

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

export const About = (props: Props) => {
	return (
		<>
			<H2Text>Hey there 🤙</H2Text>
			<H2Text> I'm a React Front-End Developer</H2Text>
			<Separator />
			<LogoContainer>
				{logos.map((logo) => {
					return <TechnologyLogo src={logo.src} alt={logo.name} />;
				})}
			</LogoContainer>
		</>
	);
};
