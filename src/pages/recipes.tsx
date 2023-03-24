import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import RecipePreview from "../components/recipePreview";
import { PageContextWithLocale } from "../types";

type Props = PageProps<Queries.RecipesIndexQuery, PageContextWithLocale>;

const RecipeIndex: React.FC<Props> = props => {
  const recipes = props.data.allContentfulRecipe.nodes;

  return (
    <Layout location={props.location.pathname}>
      <Hero name="Recipes" image={null} description={null} />
      <RecipePreview recipes={recipes} locale={props.pageContext.locale} />
    </Layout>
  );
};

export default RecipeIndex;

export const pageQuery = graphql`
  query RecipesIndex($language: String) {
    allContentfulRecipe(filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        slug
        image {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`;
