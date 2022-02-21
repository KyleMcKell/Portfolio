import React from 'react';
import styled from 'styled-components';

interface Props {}

export const Header = (props: Props) => {
  return (
    <Wrapper>
      <Name>Kyle McKell</Name>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 2rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 8px solid var(--nord9);
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: var(--nord4);
`;
