import React from 'react';
import styled from 'styled-components';
import ContentContainer from 'components/ContentContainer';

interface Props {
  content: string;
}

const StyledMain = styled.main`
  color: var(--nord6);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  margin-left: calc(5rem + 6px + 1rem);

  @media (max-width: 1000px) {
    margin-left: revert;
    display: flex;
    align-items: center;
  }
`;

export const Body = (props: Props) => {
  return (
    <>
      <StyledMain>
        <ContentContainer content={props.content} />
      </StyledMain>
    </>
  );
};
