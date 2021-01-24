import React from "react";
import styled from "styled-components";

interface Props {}

const StyledHeader = styled.header`
	height: 200px;
	width: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (orientation: landscape) {
		margin-left: calc(5rem + 6px);
	}
`;

const NameContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const H1Name = styled.h1`
	font-size: 4rem;
	font-weight: bold;
	color: var(--nord4);
	margin-bottom: 5px;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	trasnform: translateY(-50%);
	border-right: 6px solid transparent;
	animation: typewriter 2s steps(11) 2s 1 normal both,
		blinkTextCursor 1.25s steps(2, start) 5;

	@keyframes typewriter {
		from {
			width: 0;
		}
		to {
			width: 422px;
		}
	}

	@keyframes blinkTextCursor {
		from {
			border-right-color: var(--nord4);
		}
		to {
			border-right-color: transparent;
		}
	}
`;

const Separator = styled.div`
	background-color: var(--nord9);
	height: 0.5rem;
	width: 30rem;
	margin-top: 0;
	margin-bottom: 1rem;
`;

export const Header = (props: Props) => {
	return (
		<StyledHeader>
			<NameContainer>
				<H1Name>Kyle McKell</H1Name>
			</NameContainer>
			<Separator />
		</StyledHeader>
	);
};
