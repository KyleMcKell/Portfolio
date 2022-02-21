import React from 'react';
import styled from 'styled-components';

interface Props {}

export const Header = (props: Props) => {
  return (
    <Wrapper>
      <Name> Kyle McKell </Name>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: var(--nord4);
`;
