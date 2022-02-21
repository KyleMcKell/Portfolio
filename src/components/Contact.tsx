import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

interface Props {}

export const Contact = (props: Props) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'contact-me', e.target, 'user_vManlYtWcUHq4SZAbx5T0')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    setButtonDisabled(true);
    alert('email sent!');
  };

  return (
    <Wrapper action="submit" onSubmit={sendEmail}>
      <Heading>Contact Me!</Heading>
      <NameField>
        <label htmlFor="name">Name</label>
        <OneLineInput type="text" name="name" required />
      </NameField>

      <EmailField>
        <label htmlFor="email">Email</label>
        <OneLineInput type="email" name="email" required />
      </EmailField>

      <SubjectField>
        <label htmlFor="message">Subject</label>
        <OneLineInput name="subject" type="text" required />
      </SubjectField>

      <Message>
        <label htmlFor="message">Message</label>
        <MessageArea name="message" required />
      </Message>

      <SubmitButton type="submit" disabled={buttonDisabled}>
        Send
      </SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 800px;
  flex: 1;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr minmax(500px, 3fr) 1fr;
  grid-template-areas:
    'heading heading heading'
    'name message message'
    'email message message'
    'subject subject button';

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'heading'
      'name'
      'email'
      'subject'
      'message'
      'button';
  }
`;

const Heading = styled.h2`
  color: var(--nord6);
  font-size: 2rem;
  grid-area: heading;
  text-align: center;

  @media (max-width: 466px) {
    text-align: revert;
  }
`;

const Field = styled.div`
  display: grid;
  max-height: 6rem;
`;

const NameField = styled(Field)`
  grid-area: name;
`;
const EmailField = styled(Field)`
  grid-area: email;
`;
const SubjectField = styled(Field)`
  grid-area: subject;
`;
const Message = styled.div`
  grid-area: message;
  line-height: 1.5;
`;

const OneLineInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border: none;
  border-radius: 5px;
  background-color: var(--nord3);
  color: var(--nord6);
  margin-top: 0.3rem;
  font-family: inherit;

  :focus {
    background-color: var(--nord4);
    color: var(--nord0);
  }
`;

const MessageArea = styled.textarea`
  display: grid;
  padding: 1rem 0.5rem;
  font-size: 1.2rem;
  line-height: 1.5;
  width: 100%;
  min-height: calc(100% - 1.5rem);
  border: none;
  font-family: var(--font-base);
  border-radius: 5px;
  background-color: var(--nord3);
  color: var(--nord6);

  :focus {
    background-color: var(--nord4);
    color: var(--nord0);
  }
`;

const SubmitButton = styled.button`
  place-self: end;
  display: grid;
  place-content: center;
  max-height: 40px;
  border: none;
  padding: 1rem 3rem;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  color: var(--nord4);
  background-color: var(--nord3point5);
  transition: background-color 0.5s ease;

  :hover {
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    background-color: var(--nord3);
  }

  :active {
    background-color: var(--nord2);
  }

  &:disabled {
    opacity: 0.3;
  }
`;
