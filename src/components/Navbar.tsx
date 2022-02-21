import React from 'react';
import styled from 'styled-components';
import crow from 'images/nav-icons/crow.png';
import feather from 'images/nav-icons/feather.png';
import code from 'images/nav-icons/code.png';
import github from 'images/nav-icons/github.png';

interface Props {
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

interface navbarElement {
  img: string;
  text: string;
  src: string;
}

const navbarElements: navbarElement[] = [
  {
    img: crow,
    text: 'Kyle McKell',
    src: '',
  },
  {
    img: code,
    text: 'Projects',
    src: 'projects',
  },
  {
    img: feather,
    text: 'Contact',
    src: 'contact',
  },
  {
    img: github,
    text: 'My GitHub',
    src: 'https://github.com/kylemckell',
  },
];

export const Navbar = (props: Props) => {
  const handleClick = (src: string) => {
    if (src.split('/').length === 1) {
      props.setContent(src);
    } else {
      return window.open(`${src}`, '_self');
    }
  };

  return (
    <NavBar>
      <NavBarNav>
        {navbarElements.map((element) => {
          return (
            <NavListElement key={`${element.text}element`}>
              <NavLink onClick={() => handleClick(element.src)}>
                <NavListImg src={`${element.img}`} alt={`${element.text}`} />
                <NavListText>{element.text}</NavListText>
              </NavLink>
            </NavListElement>
          );
        })}
      </NavBarNav>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background: var(--nord1);
  z-index: 100;

  @media (min-width: 1000px) {
    width: 5rem;
    height: 100vh;
    position: fixed;
    transition: width 200ms ease-out;

    :hover {
      width: 20rem;
    }

    :hover span {
      display: inline;
    }
  }
`;

const NavBarNav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--nord6);
  text-decoration: none;
  height: 5rem;
  transition: color 300ms linear;
  justify-content: left;

  :hover {
    color: var(--nord1);
    cursor: pointer;
  }

  :hover img {
    filter: none;
  }

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const NavListText = styled.span`
  display: none;
`;

const NavListElement = styled.li`
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background-color 300ms linear;
  overflow: hidden;

  white-space: nowrap;

  :first-child {
    border-bottom: 6px var(--nord3) solid;
    font-size: 2rem;
    text-align: center;
    letter-spacing: 0.02ch;
    width: 100%;
    /* border-bottom: revert; */
  }

  :first-child img {
    margin: 0 1.25rem;
    min-width: 2.5rem;
    max-width: 2.5rem;
  }

  :last-child {
    margin-top: auto;
  }

  :hover {
    background-color: var(--nord4);
  }

  @media (max-width: 1000px) {
    height: 100%;
    text-align: center;
    font-size: 0.8rem;

    :hover img {
      display: none;
    }

    :hover span {
      display: inline;
      text-align: center;
    }

    white-space: nowrap;

    :first-child {
      border-bottom: revert;
      font-size: revert;
    }

    :first-child img {
      margin: revert;
      min-width: revert;
    }

    :last-child {
      margin-top: revert;
    }
  }
`;

const NavListImg = styled.img`
  min-width: 2rem;
  margin: 1.5rem;
  max-width: 2rem;
  filter: brightness(4);
  transition: filter 200ms linear;
`;
