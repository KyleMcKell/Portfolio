import styled from 'styled-components';
import React from 'react';
import { About } from 'components/About';
import { Projects } from 'components/Projects';
import { Contact } from './Contact';

interface Props {
  content: string;
}

export const ContentContainer: React.FC<Props> = (props: Props) => {
  const shownContent = () => {
    switch (props.content) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <Projects />;
      default:
        return <About />;
    }
  };

  return <ContentWrapper>{shownContent()}</ContentWrapper>;
};

const ContentWrapper = styled.div`
  @media (max-width: 1000px) {
    width: 80%;
    padding: 0rem;
    padding-bottom: 1rem;
  }
`;

export default ContentContainer;
