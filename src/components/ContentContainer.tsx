import styled from "styled-components";
import React from "react";
import { About } from "components/About";
import { Contact } from "components/Contact";
import { Projects } from "components/Projects";

const ContentContainerStyling = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	height: 50%;
	align-items: center;
	justify-content: space-evenly;
	background: var(--nord1);
	margin: 0;
	padding: 1rem;
	border: 4px solid var(--nord3);
	border-radius: 20px;
	box-shadow: 8px 8px 5px var(--nord0);
`;

interface Props {
	content: string;
}

const swipeOver = () => {
	
}

export const ContentContainer = (props: Props) => {
	const shownContent = () => {
		switch (props.content) {
			case "about":
				return <About />;
			case "contact":
				return <Contact />;
			case "projects":
				return <Projects />;
			default:
				return <About />;
		}
	};

	return <ContentContainerStyling>{shownContent()}</ContentContainerStyling>;
};

export default ContentContainer;
