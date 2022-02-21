import React from 'react';
import styled from 'styled-components';

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
  margin-top: 0px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  border-right: 6px solid transparent;
  @media only screen and (max-width: 800px) {
    font-size: 3rem;
  }
`;

const HeaderSeparator = styled.div`
  background-color: var(--nord9);
  height: 0.5rem;
  width: 30rem;
  margin-top: 0;
  margin-bottom: 1rem;

  @media only screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export const Header = (props: Props) => {
  return (
    <StyledHeader>
      <NameContainer>
        <H1Name>Kyle McKell</H1Name>
      </NameContainer>
      <HeaderSeparator />
    </StyledHeader>
  );
};
