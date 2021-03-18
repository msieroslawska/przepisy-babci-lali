import React from "react";
import { graphql } from "gatsby";

import { PublicURLQuery, RecipeData } from "../../types/graphQlQueries";

import { PageLayout } from "./pageLayout";
import { Recipe } from "./recipe";
interface Props {
  data: PublicURLQuery;
  pageContext: RecipeData;
}

const renderError = () => <p>OOOOPS SOMETHING IS MISSING!</p>;

const validate = (recipeData: RecipeData): boolean =>
  !!recipeData.imageName &&
  !!recipeData.ingredientsList &&
  !!recipeData.instructions &&
  !!recipeData.name;

const RecipeLayout: React.FC<Props> = props => {
  const renderContent = () =>
    validate(props.pageContext) ? <Recipe {...props} /> : renderError();
  return (
    <PageLayout header={props.pageContext.name}>{renderContent()}</PageLayout>
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
