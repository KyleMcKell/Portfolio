import React from 'react';
import styled from 'styled-components';

import css3 from 'images/tech-icons/css3.png';
import html5 from 'images/tech-icons/html5.png';
import js from 'images/tech-icons/javascript.png';
import react from 'images/tech-icons/react.png';
import ts from 'images/tech-icons/typescript.png';
import selfie from 'images/me.jpg';

interface Props {}

interface TechIcon {
  src: string;
  name: string;
}

const techIcons: TechIcon[] = [
  {
    src: html5,
    name: 'html5',
  },
  {
    src: css3,
    name: 'css3',
  },
  {
    src: js,
    name: 'javascript',
  },
  {
    src: ts,
    name: 'typescript',
  },
  {
    src: react,
    name: 'react',
  },
];

export const About = (props: Props) => {
  return (
    <>
      <Separator />
      <AboutSelfDiv>
        <TextDiv>
          <AboutMeText>
            <div>
              I’m a self-taught front end software developer ADHDing my way
              through the world of web development.
            </div>
            <br />
            <div>
              I have a passion for teaching others, you can follow along on my
              Twitter!{' '}
              <SocialLink href="https://twitter.com/KyleMcKell">
                @KyleMcKell
              </SocialLink>
            </div>
          </AboutMeText>
        </TextDiv>
        <SelfieStyle src={selfie} alt="picture of me" />
      </AboutSelfDiv>
      <Separator />
    </>
  );
};

const AboutSelfDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 100%;
    padding-top: 3rem;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const SelfieStyle = styled.img`
  height: 15rem;
  width: 15rem;
  min-width: 15rem;
  border-radius: 50%;
  border: 5px solid var(--nord3point5);
  filter: drop-shadow(0 4px 3px var(--nord0))
    drop-shadow(0 2px 2px var(--nord1));
`;

const AboutMeText = styled.p`
  max-width: 450px;
  font-weight: 450;
  line-height: 1.7;
  font-size: 1.2rem;
  padding: 0 2rem;
`;

const SocialLink = styled.a`
  color: inherit;

  :hover {
    cursor: pointer;
    color: var(--nord8);
  }
`;

const Separator = styled.div`
  background-color: var(--nord5);
  height: 0.5rem;
  width: 70%;
  margin: 2rem;
`;
