import styled from "styled-components";

const NavListElement = styled.li`
	width: 100%;
	font-weight: bold;
	font-size: 1.2rem;
	transition: background-color 300ms linear;
	overflow: hidden;
	white-space: nowrap;

	:hover {
		background-color: var(--nord4);
	}

	@media only screen and (orientation: landscape) {
		:first-child {
			text-transform: uppercase;
			font-size: 2rem;
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
		:last-child {
			margin-top: auto;
		}
	}

	@media only screen and (orientation: portrait) {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
`;

export default NavListElement;
