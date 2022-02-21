import React from 'react';
import styled from 'styled-components';

import selfie from 'images/me.jpg';

interface Props {}

export const About = (props: Props) => {
  return (
    <AboutSelfDiv>
      <TextDiv>
        <AboutMeText>
          <span>
            I’m a self-taught front-end developer ADHDing my way through the
            world of web development.
          </span>
          <span>
            I have a passion for teaching others, you can follow along on my
            Twitter!{' '}
            <Link href="https://twitter.com/KyleMcKell">@KyleMcKell</Link>
          </span>
          <span>
            My current tech stack includes{' '}
            <Link href="https://reactjs.org/">React</Link>,{' '}
            <Link href="https://www.typescriptlang.org/">TypeScript</Link>, and
            a UI framework. My favorites are{' '}
            <Link href="https://nextjs.org/">Next.js</Link>,{' '}
            <Link href="https://remix.run/">Remix</Link>, and{' '}
            <Link href="https://kit.svelte.dev/">SvelteKit</Link>. I also LOVE
            writing <SnazzyText> NIFTY </SnazzyText>CSS.
          </span>
        </AboutMeText>
      </TextDiv>
      <SelfieStyle src={selfie} alt="picture of me" />
    </AboutSelfDiv>
  );
};

const AboutSelfDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: var(--nord1);
  width: 100%;
  padding: 4rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 100%;
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
`;

const AboutMeText = styled.p`
  max-width: 450px;
  font-weight: 450;
  line-height: 1.7;
  font-size: 1.2rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Link = styled.a`
  color: var(--nord8point5);

  :hover {
    cursor: pointer;
    color: var(--nord8);
  }
`;

const SnazzyText = styled.span`
  font-family: var(--font-snazzy);
  color: var(--nord15);
`;
