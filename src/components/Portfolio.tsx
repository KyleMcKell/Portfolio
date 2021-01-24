import React from "react";
import H2Text from "./H2Text";
import Separator from "./Separator";

interface Props {}

interface Project {
	name: string;
	url: string;
	description: string;
	image: any;
}

const projects: Project[] = [];

export const Portfolio = (props: Props) => {
	return (
		<>
			<H2Text>My Projects</H2Text>
			<Separator />
		</>
	);
};
