import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Footer } from "./footer";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Bitter', serif;
  }
`;

const PageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lavenderblush;
  height: 100vh;
`;

const Header = styled.h1`
  font-size: 2em;
  flex: 0 0 auto;
  text-align: center;
`;

interface Props {
  header: string;
}

export const PageLayout: React.FC<Props> = ({ children, header }) => (
  <>
    <GlobalStyles />
    <PageWrapper>
      <Header>{header}</Header>
      {children}
      <Footer />
    </PageWrapper>
  </>
);
