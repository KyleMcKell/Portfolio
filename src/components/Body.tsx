import React from "react";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";

interface Props {
	content: string;
}

const StyledMain = styled.main`
	margin-left: calc(5rem + 6px);

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
				<ContentContainer content={props.content} />
			</StyledMain>
		</>
	);
};
