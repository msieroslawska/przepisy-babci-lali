import React from "react";
import { graphql, Link } from "gatsby";
import { PathNode, PathQuery } from "../../types/graphQlQueries";

import { PageLayout } from "../components/pageLayout";

const filterNullNodes = (edges: PathNode[]) =>
  edges.filter(edge => edge.node.path.includes("recipes"));

const renderLink = ({
  node: {
    context: { name },
    path,
  },
}: PathNode) => (
  <li key={name}>
    <Link to={path}>{name}</Link>
  </li>
);

interface Props {
  data: PathQuery;
}

const RecipeList: React.FC<Props> = ({ data }) => {
  const validNodes = filterNullNodes(data.allSitePage.edges);

  return (
    <PageLayout header="Wszystkie przepisy">
      <ul>{validNodes.map(renderLink)}</ul>
    </PageLayout>
  );
};

export default RecipeList;

export const pageQuery = graphql`
  query {
    allSitePage {
      edges {
        node {
          path
          context {
            name
          }
        }
      }
    }
  }
`;
