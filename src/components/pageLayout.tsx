import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Footer } from "./footer";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #444f5a;
    font-family: 'Raleway', sans-serif;
  }

  body {
      background-color: #f6f6f6;
  }

  h1, h2, h3 {
    color: #6c5b7b;
    font-family: 'Bitter', serif;
    font-weight: 700;
  }

  a {
    color: #3d84a8;

    :hover {
      color: #46cdcf;
    }
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
  justify-content: space-between;
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
