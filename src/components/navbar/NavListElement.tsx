import styled from "styled-components";

const NavListElement = styled.li`
	width: 100%;
	font-weight: bold;
	font-size: 1.2rem;
	transition: background-color 300ms linear;

	:first-child {
		text-transform: uppercase;
		font-size: 2rem;
		overflow: hidden;
		white-space: nowrap;
		text-align: center;
		letter-spacing: 0.02ch;
		width: 100%;
		border-bottom: 6px var(--nord3) solid;
	}

	:first-child img {
		margin: 0 1.25rem;
		min-width: 2.5rem;
		max-width: 2.5rem;
	}

	:hover {
		background-color: var(--nord4);
	}
`;

export default NavListElement;
