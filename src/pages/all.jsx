import React from "react";
import { Link } from "gatsby";

import { PageLayout } from "../components/pageLayout";

const All = () => (
  <PageLayout header="Wszystkie przepisy">
    <Link to="../recipes/babkaLeniwa">BABKA</Link>
  </PageLayout>
);

export default All;
