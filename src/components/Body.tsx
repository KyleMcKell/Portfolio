import React from "react";
import styled from "styled-components";
import { About } from "./About";
import { Header } from "./Header";

interface Props {}

const StyledMain = styled.main`
	margin-left: 5rem;
	background: var(--nord1);
	height: 100vh;
	color: var(--nord6);
	font-weight: bold;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Body = (props: Props) => {
	return (
		<>
			<Header />
			<StyledMain>
				<About />
			</StyledMain>
		</>
	);
};
