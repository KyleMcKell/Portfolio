import React from "react";
import styled from "styled-components";

interface Props {}

const StyledHeader = styled.header`
	height: 200px;
	width: auto;
	background-color: var(--nord1);
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
`;

const Blinker = styled(H1Name)`
	color: var(--nord8);
	animation: blink-animation 1.25s steps(2, start) infinite;
	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
`;

const Separator = styled.div`
	background-color: var(--nord11);
	height: 1rem;
	width: 30rem;
	margin-top: 0;
	margin-bottom: 1rem;
`;

const SubText = styled.h3`
	margin-top: 0;
	color: var(--nord4);
`;

export const Header = (props: Props) => {
	return (
		<StyledHeader>
			<NameContainer>
				<H1Name>Kyle McKell</H1Name>
				<h3>&nbsp;</h3>
				<Blinker>|</Blinker>
			</NameContainer>
			<Separator />
			<SubText>Nord Theme User</SubText>
		</StyledHeader>
	);
};
