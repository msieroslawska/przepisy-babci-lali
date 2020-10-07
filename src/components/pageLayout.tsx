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

  body {
      background-color: lavenderblush;
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
  height: 100vh;
  width: 70vw;
  margin: 0 auto;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 2em;
  flex: 0 0 auto;
  text-align: center;
  margin-top: 60px;
`;

interface Props {
  header: string;
}

export const PageLayout: React.FC<Props> = ({ children, header }) => (
  <>
    <GlobalStyles />
    <PageWrapper>
      <ContentWrapper>
        <Header>{header}</Header>
        {children}
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  </>
);
