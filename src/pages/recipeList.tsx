import React from "react";
import { graphql, Link } from "gatsby";
import { PathNode, PathQuery } from "../../types/graphQlQueries";

import { PageLayout } from "../components/pageLayout";
import styled from "styled-components";

const RecipeList = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const RecipeLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipeLogo = styled.div`
  background: radial-gradient(
    ellipse at center,
    rgba(0, 128, 172, 1) 0%,
    rgba(0, 128, 172, 1) 70%,
    rgba(0, 128, 172, 0) 70.3%
  );
  height: 150px;
  width: 150px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const filterNullNodes = (edges: PathNode[]) =>
  edges.filter(edge => edge.node.path.includes("recipes"));

const getFirstLetter = (recipeName: string) => recipeName[0];

const renderLink = ({
  node: {
    context: { name },
    path,
  },
}: PathNode) => (
  <RecipeLink key={name}>
    <RecipeLogo>
      {getFirstLetter(name)}
    </RecipeLogo>
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
