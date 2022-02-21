import styled from 'styled-components';

const TechnologyLogo = styled.img`
  width: 80px;
  height: 80px;
  filter: grayscale(100%);
  transition: filter ease-in-out 300ms;
  margin: 0.5rem;

  @media only screen and (min-width: 1000px) {
    margin: 1rem 2rem;
  }

  :hover {
    filter: grayscale(0%);
  }
`;

export default TechnologyLogo;
