import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import { PathNode, PathQuery } from "../../types/graphQlQueries";

import { PageLayout } from "../components/pageLayout";
import { RecipeLogo } from "../components/recipeLogo";

const RecipeList = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 30px;
  margin: 50px 0;
`;

const RecipeLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const filterNullNodes = (edges: PathNode[]) =>
  edges.filter(edge => edge.node.path.includes("recipes"));

const filterLanguage = (edges: PathNode[], currentLanguage: "EN" | "PL") =>
  edges.filter(edge => edge.node.pageContext.language === currentLanguage);

interface Props {
  data: PathQuery;
}

const AllRecipes: React.FC<Props> = ({ data }) => {
  const currentLanguage = "EN";
  const validNodes = filterNullNodes(data.allSitePage.edges);
  const currentLanguageNodes = filterLanguage(validNodes, currentLanguage);

  return (
    <PageLayout header="Wszystkie przepisy">
      <RecipeList>
        {currentLanguageNodes.map(n => (
          <RecipeLink key={n.node.pageContext.name}>
            <RecipeLogo name={n.node.pageContext.name} />
            <Link to={n.node.path}>{n.node.pageContext.name}</Link>
          </RecipeLink>
        ))}
      </RecipeList>
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
          pageContext
        }
      }
    }
  }
`;
