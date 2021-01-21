import React from "react";
import styled from "styled-components";

interface Props {}

const StyledNavElement = styled.li`
	display: flex;
	align-items: center;
	width: 100%;
	height: 3rem;
	color: var(--nord6);
	font-weight: bold;
	background-color: transparent;
	transition: background-color 300ms linear;
	transition: color 200ms linear;

	:hover {
		background-color: var(--nord4);
		color: var(--nord3);
	}

	:last-child {
		margin-top: auto;
	}
`;

export const NavElement = (props: Props) => {
	return <StyledNavElement>Hello</StyledNavElement>;
};
