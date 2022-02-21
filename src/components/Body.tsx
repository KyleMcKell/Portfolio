import styled from 'styled-components';
import { About } from 'components/About';
import { Projects } from 'components/Projects';

export const Body = () => {
  return (
    <Main>
      <About />
      <Projects />
    </Main>
  );
};

const Main = styled.main`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
