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
  allIngredients.length > 0 && allIngredients.map(renderIngredientsChunk);

const renderInstructions = (instructions: string[]) =>
  instructions.length > 0 && instructions.map(instruction => (
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

const renderRecipe = (recipeData: Props) => (
  <RecipeWrapper>
    <TextWrapper>
      {renderIngredients(recipeData.pageContext.ingredientsList)}
      {renderInstructions(recipeData.pageContext.instructions)}
    </TextWrapper>
    {renderImage(recipeData.data, recipeData.pageContext.name)}
  </RecipeWrapper>
);

const renderError = () => (
  <p>OOOOPS SOMETHING IS MISSING!</p>
)

const validate = (recipeData: Recipe): boolean => !!recipeData.imageName && !!recipeData.ingredientsList && !!recipeData.instructions && !!recipeData.name;



const RecipeLayout: React.FC<Props> = (props) => {
  const renderContent = () => validate(props.pageContext) ? renderRecipe(props) : renderError();
  return (
    <PageLayout header={props.pageContext.name}>
      {renderContent()}
    </PageLayout>
  );
};

export default RecipeLayout;

export const query = graphql`
  query($imageName: String!) {
    allFile(
      filter: { sourceInstanceName: { eq: "assets" }, name: { eq: $imageName } }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
