import React from "react";
import styled from "styled-components";

import { PageLayout } from "../components/pageLayout";

import babcia1 from '../../assets/babcia1.png';
import babcia2 from '../../assets/babcia2.png';

const PictureWrapper = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Picture = styled.div`
  height: 400px;
  text-align: center;

  img {
    height: 100%;
  }
`;

const Home = () => (
  <PageLayout header="Przepisy babci Lali">
    <PictureWrapper>
      <Picture>
        <img src={babcia1} alt="Babcia1" />
      </Picture>

      <Picture>
        <img src={babcia2} alt="Babcia2" />
      </Picture>
    </PictureWrapper>
  </PageLayout>
);

export default Home;
