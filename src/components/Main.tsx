import styled from 'styled-components';
import { About } from 'components/About';
import { Projects } from 'components/Projects';

export const Main = () => {
  return (
    <Wrapper>
      <About />
      <Projects />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
