import React from "react";
import styled from "styled-components";

import { PageLayout } from "../components/pageLayout";

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

const Home: React.FC = () => (
  <PageLayout header="Przepisy babci Lali">
    <PictureWrapper>
      <Picture>
        <img src="babcia-1.png" alt="Babcia1" />
      </Picture>

      <Picture>
        <img src="babcia-2.png" alt="Babcia2" />
      </Picture>
    </PictureWrapper>
  </PageLayout>
);

export default Home;
