import React from "react";
import styled from "styled-components";
import crow from "images/crow.svg";

interface Props {}

const NavListElement = styled.li`
	width: 100%;

	:last-child {
		margin-top: auto;
	}
`;

const NavLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: left;
	height: 5rem;
	color: var(--nord6);
	text-decoration: none;
	transition: background-color 300ms linear;

	:hover {
		background-color: var(--nord4);
		color: var(--nord1);
	}

	:hover img {
		filter: none;
	}
`;

const LinkText = styled.span`
	display: none;
`;

const NavListImg = styled.img`
	min-width: 2rem;
	margin: 1.5rem;
	max-width: 2rem;
	filter: brightness(4);
	transition: filter 200ms linear;
`;

export const NavElement = (props: Props) => {
	return (
		<NavListElement>
			<NavLink>
				<NavListImg src={crow} alt="crow" />
				<LinkText>Wow</LinkText>
			</NavLink>
		</NavListElement>
	);
};
