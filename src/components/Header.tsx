import React from "react";
import styled from "styled-components";

interface Props {}

const StyledHeader = styled.header`
	height: 20px;
	background-color: var(--nord1);
`;

export const Header = (props: Props) => {
	return <StyledHeader></StyledHeader>;
};
