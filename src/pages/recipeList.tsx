import React from "react";
import { graphql, Link } from "gatsby";
import { PathNode, PathQuery } from "../../types/graphQlQueries";

import { PageLayout } from "../components/pageLayout";
import styled from "styled-components";

const RecipeList = styled.ul`
  padding: 15px;
  text-align: center;
`;

const RecipeLink = styled.li`
  list-style: none;
`;

const filterNullNodes = (edges: PathNode[]) =>
  edges.filter(edge => edge.node.path.includes("recipes"));

const renderLink = ({
  node: {
    context: { name },
    path,
  },
}: PathNode) => (
  <RecipeLink key={name}>
    <Link to={path}>{name}</Link>
  </RecipeLink>
);

interface Props {
  data: PathQuery;
}

const AllRecipes: React.FC<Props> = ({ data }) => {
  const validNodes = filterNullNodes(data.allSitePage.edges);

  return (
    <PageLayout header="Wszystkie przepisy">
      <RecipeList>{validNodes.map(renderLink)}</RecipeList>
    </PageLayout>
  );
};

export default AllRecipes;

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
