import styled from "styled-components";
import React from "react";
import { About } from "components/About";
import { Contact } from "components/Contact";
import { Projects } from "components/Projects";

const ContentContainerStyling = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	height: 100%;
	align-items: center;
	justify-content: space-evenly;
	background: var(--nord1);
	margin: 0;
	margin-bottom: 2rem;
	padding: 3rem;
	border: 4px solid var(--nord3);
	border-radius: 20px;
	box-shadow: 16px 16px 16px var(--nord0);

	@media only screen and (max-width: 1100px) {
		width: 80%;
	}

	@media only screen and (max-width: 800px) {
		max-width: 100%;
		padding: 0rem;
		padding-bottom: 1rem;
	}
`;

interface Props {
	content: string;
}

export const ContentContainer: React.FC<Props> = (props: Props) => {
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
