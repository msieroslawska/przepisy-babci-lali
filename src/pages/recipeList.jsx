import React from "react";
import { graphql, Link } from "gatsby";

import { PageLayout } from "../components/pageLayout";

const filterNullNodes = edges => edges.filter(edge => edge.node.path.includes('recipes'));

const renderLink = ({ node: { context, path } }) => (
  <li key={context.name}>
    <Link to={path}>{context.name}</Link>
  </li>
);

const RecipeList = ({ data }) => {
  const validNodes = filterNullNodes(data.allSitePage.edges);

  return (
    <PageLayout header="Wszystkie przepisy">
      <ul>{validNodes.map(renderLink)}</ul>
    </PageLayout>
  );};

export default RecipeList;

export const pageQuery = graphql`
  query {
    allSitePage {
      edges {
        node {
          path
          context {
            ingredientsList,
            name
          }
        }
      }
    }
  }
`;