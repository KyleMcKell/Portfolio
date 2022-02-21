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
      <div>
        <ContactInfoDiv>
          <LabelInputDiv>
            <label htmlFor="name">Name</label>
            <OneLineInput type="text" name="name" required />
          </LabelInputDiv>
          <LabelInputDiv>
            <label htmlFor="email">Email</label>
            <OneLineInput type="email" name="email" required />
          </LabelInputDiv>
        </ContactInfoDiv>
        <LabelInputDiv>
          <label htmlFor="message">Subject</label>
          <SubjectArea name="subject" type="text" required />
        </LabelInputDiv>
        <LabelInputDiv>
          <label htmlFor="message">Message</label>
          <MessageArea name="message" required />
        </LabelInputDiv>
      </div>
      <div className="ButtonDiv">
        <SubmitButton type="submit" disabled={buttonDisabled}>
          Send
        </SubmitButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Heading = styled.h2`
  color: var(--nord6);
  text-align: center;
  font-size: 2rem;
`;

const ContactInfoDiv = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 2rem;
`;

const OneLineInput = styled.input`
  height: 2rem;
  padding: 0.2em 1em;
  width: 14.5em;
  border: none;
  border-radius: 5px;
  background-color: var(--nord3);
  color: var(--nord6);
  margin-top: 0.3rem;
  font-size: 0.8rem;
  font-family: inherit;

  :focus {
    background-color: var(--nord4);
    color: var(--nord0);
  }
`;

const SubjectArea = styled(OneLineInput)`
  width: 36em;

  @media (max-width: 1000px) {
    width: 14.5em;
  }
`;

const MessageArea = styled.textarea`
  width: 36em;
  height: 60px;
  padding: 1em;
  display: flex;
  align-items: start;
  justify-content: start;
  white-space: normal;
  border: none;
  font-family: inherit;
  border-radius: 5px;
  background-color: var(--nord3);
  color: var(--nord6);
  margin-top: 0.3rem;
  font-size: 0.8rem;
  max-width: 70em;
  max-height: 15em;

  :focus {
    background-color: var(--nord4);
    color: var(--nord0);
  }

  @media (max-width: 1000px) {
    width: 14.5em;
    max-width: 20em;
    max-height: 50em;
  }
`;

const SubmitButton = styled.button`
  border: none;
  background: none;
  width: 11rem;
  height: 3rem;
  background-color: var(--nord3point5);
  border-radius: 4px;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 2px 2px 1px var(--nord0);
  margin-top: 0.8rem;
  margin-bottom: 0.2rem;
  color: var(--nord4);

  :hover {
    cursor: pointer;
  }

  :active {
    margin-top: 0.9rem;
    margin-bottom: 0.1rem;
  }

  &:disabled {
    opacity: 0.3;
  }
`;
