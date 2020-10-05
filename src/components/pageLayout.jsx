import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Navigation } from "./navigation";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;

const PageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: lavenderblush;
  height: 100vh;
`;

const Header = styled.h1`
  font-size: 2em;
  flex: 0 0 auto;
  text-align: center;
`;

export const PageLayout = ({ children, header }) => (
  <>
    <GlobalStyles />
    <PageWrapper>
      <Header>{header}</Header>
      {children}
      <Navigation />
    </PageWrapper>
  </>
);
