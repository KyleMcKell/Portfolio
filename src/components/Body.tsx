import React from "react";
import styled from "styled-components";
import { About } from "./About";

interface Props {}

const StyledMain = styled.main`
	margin-left: calc(5rem + 6px);
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
			<StyledMain>
				<About />
			</StyledMain>
		</>
	);
};
