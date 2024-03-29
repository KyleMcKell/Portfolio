import React from 'react';
import styled from 'styled-components';

import selfie from 'images/me.jpg';

interface Props {}

export const About = (props: Props) => {
  return (
    <Wrapper>
      <AboutMe>
        <span>
          Hello! I&apos;m a self-taught front-end developer
          <SnazzyText> ADHD-</SnazzyText>ing my way through the world of web
          development.
        </span>
        <span>
          I have a passion for teaching others, and if you're interested, you
          can follow along on my
          <Link href="https://twitter.com/KyleMcKell"> Twitter</Link>!
        </span>
        <span>
          While you're at it, you can check out my
          <Link href="https://github.com/KyleMcKell"> GitHub</Link>!
        </span>
        <span>
          My current tech stack includes
          <Link href="https://reactjs.org/"> React</Link>,
          <Link href="https://www.typescriptlang.org/"> TypeScript</Link>, and a
          UI framework. Currently my favorites are
          <Link href="https://nextjs.org/"> Next.js</Link>,
          <Link href="https://remix.run/"> Remix</Link>, and
          <Link href="https://kit.svelte.dev/"> SvelteKit</Link>.
        </span>
        <span>
          I also LOVE writing <SnazzyTextPink> NIFTY </SnazzyTextPink>CSS.
        </span>
        <span>☕ Let's chat sometime 💙</span>
      </AboutMe>

      <Selfie src={selfie} alt="Kyle McKell holding a plant" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: var(--nord1);
  width: 100%;
  padding: 4rem 3rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const AboutMe = styled.p`
  max-width: 450px;
  font-weight: 450;
  line-height: 1.7;
  font-size: 1.2rem;
  display: flex;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;
`;

const Selfie = styled.img`
  height: 15rem;
  width: 15rem;
  min-width: 15rem;
  border-radius: 50%;
  border: 5px solid var(--nord3point5);
`;

const Link = styled.a`
  color: var(--nord8point5);
  text-decoration: none;

  :hover {
    cursor: pointer;
    color: var(--nord8);
    text-decoration: underline;
  }
`;

const SnazzyText = styled.span`
  font-family: var(--font-snazzy);
`;

const SnazzyTextPink = styled(SnazzyText)`
  font-family: var(--font-snazzy);
  color: var(--nord15);
`;
