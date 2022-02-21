import React from 'react';
import styled from 'styled-components';
import { Contact } from './Contact';

type Props = {};

export const Footer = (props: Props) => {
  return (
    <Wrapper>
      <Contact />
      {/* <Socials>hi</Socials> */}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--nord1);
  padding: 4rem 2rem;
  display: flex;
`;

// const Socials = styled.section`
//   flex: 1;
// `;
