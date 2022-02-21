import React from 'react';
import { ContactForm } from 'components/ContactForm';
import styled from 'styled-components';

interface Props {}

export const Contact = (props: Props) => {
  return (
    <>
      <H2Text>Contact Me!</H2Text>
      <Separator />
      <ContactForm />
    </>
  );
};

const H2Text = styled.h2`
  color: var(--nord6);
  text-align: center;
  margin: 1.5rem 3rem;
  font-size: 1.5rem;
`;

const Separator = styled.div`
  background-color: var(--nord5);
  height: 0.5rem;
  width: 70%;
  margin: 2rem;
`;
