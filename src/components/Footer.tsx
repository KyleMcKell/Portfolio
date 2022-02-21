import React from 'react';
import styled from 'styled-components';
import { Contact } from './Contact';

type Props = {};

export const Footer = (props: Props) => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--nord1);
  padding: 4rem;
  color: var(--nord6);
`;
