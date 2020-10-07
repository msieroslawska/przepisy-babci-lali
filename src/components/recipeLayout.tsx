import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
// import Img from "gatsby-image";
import {
  IngredientChunk,
  PublicURLQuery,
  Recipe,
} from "../../types/graphQlQueries";

import { IngredientsList } from "./ingredientsList";
import { PageLayout } from "./pageLayout";

const RecipeWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TextWrapper = styled.section`
  padding: 15px;
  flex: 1 1 500px;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  flex: 0 1 700px;
  align-self: center;

  img {
    width: 100%;
  }
`;

const Instruction = styled.p``;

const NoImage = styled.p`
  align-self: center;
`;

const renderIngredientsChunk = (ingredients: IngredientChunk) => (
  <IngredientsList ingredientsChunk={ingredients} />
);

const renderIngredients = (allIngredients: IngredientChunk[]) =>
  allIngredients.map(renderIngredientsChunk);

const renderInstructions = (instructions: string[]) =>
  instructions.map(instruction => (
    <Instruction key={instruction}>{instruction}</Instruction>
  ));

const renderImage = (data: PublicURLQuery, name: string) =>
  data.allFile.edges && data.allFile.edges.length > 0 ? (
    <ImageWrapper>
      <img src={data.allFile.edges[0].node.publicURL} alt={name} />
    </ImageWrapper>
  ) : (
    <NoImage>Sad panda, there is no image :(</NoImage>
  );

interface Props {
  data: PublicURLQuery;
  pageContext: Recipe;
}

const RecipeLayout: React.FC<Props> = ({
  data,
  pageContext: { ingredientsList, instructions, name },
}) => {
  return (
    <PageLayout header={name}>
      <RecipeWrapper>
        <TextWrapper>
          {ingredientsList.length > 0 && renderIngredients(ingredientsList)}
          {instructions.length > 0 && renderInstructions(instructions)}
        </TextWrapper>
        {renderImage(data, name)}
      </RecipeWrapper>
    </PageLayout>
  );
};

export default RecipeLayout;

export const query = graphql`
  query($imageSlug: String!) {
    allFile(
      filter: { sourceInstanceName: { eq: "assets" }, name: { eq: $imageSlug } }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
