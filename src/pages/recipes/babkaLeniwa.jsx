import React from "react";

import { PageLayout } from "../../components/pageLayout";

import babkaLeniwa from '../../../assets/028_Babka_leniwa.jpg';

const BabkaLeniwa = () => (
  <PageLayout header="Babka 'leniwa'">
    <ul>
      <li>40 g drożdży</li>
      <li>1 szklanka cukru</li>
      <li>3 jajka</li>
      <li>1 szklanka mleka</li>
      <li>0,75 - 1 kostka margaryny</li>
      <li>0,5 kg mąki</li>
      <li>skórka cytrynowa</li>
      <li>łyżka oleju</li>
    </ul>

    <p>
      Drożdże rozetrzeć z cukrem. Margarynę rozpuścić w mleku. Wszystko wymieszać, wlać do foremki. Zostawić na kilka godzin aż urośnie. Piec w średnio nagrzanym piekarniku ok. 45 minut.
    </p>

    <img src={babkaLeniwa} alt="Babka" />
  </PageLayout>
);

export default BabkaLeniwa;
