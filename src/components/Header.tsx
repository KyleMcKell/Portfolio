import React from "react";
import styled from "styled-components";

interface Props {}

const StyledHeader = styled.header`
	height: 200px;
	width: auto;
	margin-left: calc(5rem + 6px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	border-right: 6px solid var(--nord3);
	animation: typewriter 2s steps(12) 2s 1 normal both,
		blinkTextCursor 1.25s steps(2, start) infinite;

	@keyframes typewriter {
		from {
			width: 0;
		}
		to {
			width: 460px;
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
				<H1Name>Kyle McKell&nbsp;</H1Name>
			</NameContainer>
			<Separator />
		</StyledHeader>
	);
};