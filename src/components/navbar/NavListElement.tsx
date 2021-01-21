import styled from "styled-components";

const NavListElement = styled.li`
	width: 100%;
	font-weight: bold;
	font-size: 1.2rem;

	:first-child {
		text-transform: uppercase;
		font-size: 2rem;
		overflow: hidden;
		white-space: nowrap;
		margin-bottom: 1rem;
		text-align: center;
		letter-spacing: 0.02ch;
		width: 100%;
	}

	:first-child img {
		min-width: 3rem;
		max-width: 3rem;
		margin: 0 1rem;
	}

	:last-child {
		margin-top: auto;
	}

	:hover {
		background-color: var(--nord4);
		color: var(--nord1);
	}
`;

export default NavListElement;
