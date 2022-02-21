import styled from 'styled-components';
import { About } from 'components/About';
import { Projects } from 'components/Projects';
import { Contact } from './Contact';

export const Body = () => {
  return (
    <Main>
      <About />
      <Projects />
      <Contact />
    </Main>
  );
};

const Main = styled.main`
  color: var(--nord6);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  margin: 1rem;
  gap: 8rem;

  @media (max-width: 1000px) {
    margin-left: revert;
    display: flex;
    align-items: center;
  }
`;
