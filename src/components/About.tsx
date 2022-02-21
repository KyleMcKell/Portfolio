import React from 'react';
import LogoContainer from 'components/LogoContainer';
import css3 from 'images/tech-icons/css3.png';
import git from 'images/tech-icons/git.png';
import html5 from 'images/tech-icons/html5.png';
import js from 'images/tech-icons/javascript.png';
import react from 'images/tech-icons/react.png';
import ts from 'images/tech-icons/typescript.png';
import TechnologyLogo from 'components/TechnologyLogo';
import H2Text from 'components/H2Text';
import Separator from 'components/Separator';
import selfie from 'images/me.jpg';
import styled from 'styled-components';

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
  {
    src: git,
    name: 'git',
  },
];

const AboutSelfDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
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
  max-width: 500px;
  font-weight: 450;
  line-height: 1.7;
  font-size: 1.2rem;
  text-align: center;
  padding: 0 2rem;
`;

export const About = (props: Props) => {
  return (
    <>
      <AboutSelfDiv>
        <TextDiv>
          <H2Text>Hey there 🤙</H2Text>
          <H2Text>Nice to Meet You!</H2Text>
          <AboutMeText>
            I’m a self-taught front end software developer ADHDing my way
            through the world of web development. I have a passion for making my
            ideas come to life in code.
          </AboutMeText>
        </TextDiv>
        <SelfieStyle src={selfie} alt="picture of me" />
      </AboutSelfDiv>
      <Separator />
      <LogoContainer>
        {techIcons.map((icon) => {
          return (
            <TechnologyLogo src={icon.src} alt={icon.name} key={icon.name} />
          );
        })}
      </LogoContainer>
    </>
  );
};
