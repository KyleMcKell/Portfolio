import React from 'react';
import { Body } from 'components/Body';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
	font-family: var(--font-base), monospace, Arial, sans-serif;
	font-size: 16px;
	--font-base: "Rubik";
	--font-snazzy: "Sriracha";
	--nord0: #2e3440;
	--nord1: #3b4252;
	--nord2: #434c5e;
	--nord3: #4c566a;
	--nord4: #d8dee9;
	--nord5: #e5e9f0;
	--nord6: #eceff4;
	--nord7: #8fbcbb;
	--nord8: #88c0d0;
	--nord9: #81a1c1;
	--nord10: #5e81ac;
	--nord11: #bf616a;
	--nord12: #d08770;
	--nord13: #ebcb8b;
	--nord14: #a3be8c;
	--nord15: #fd83e5;
	--nordGreen2: #8dab74;
	--nord3point5: #53617a;
	--nord8point5: #9ed5e4;
}

* {
	box-sizing: border-box;
	margin: 0;
}

body {
	background: var(--nord0);
}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
