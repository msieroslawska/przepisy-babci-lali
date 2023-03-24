import React from "react";
import { graphql, PageProps } from "gatsby";
import { useIntl, Link, FormattedMessage, IntlShape } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import Hero from "../components/hero";
import RecipePreview from "../components/recipePreview";

import { Language, PageContextWithLocale, TypeRecipeFields } from "../types";

type Props = PageProps<Queries.HomeQuery, IntlShape>;

export const RootIndex: React.FC<Props> = props => {
  const intl = useIntl();
  console.log("xxx", props.pageContext.language); //.intl.language);
  // intl.locale;

  const renderHero = () => {
    if (props.data.contentfulHero === null) {
      return null;
    }

    return <Hero {...props.data.contentfulHero} />;
  };

  // const filterRecipesBasedOnLocale = (recipes: TypeRecipeFields[]) => recipes.filter(recipe => recipe.)

  return (
    <Layout language={props.pageContext.language as Language}>
      {renderHero()}
      <RecipePreview
        recipes={props.data.allContentfulRecipe.nodes}
        language={props.pageContext.language as Language}
      />
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query Home($language: String) {
    allContentfulRecipe(filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        slug
        image {
          gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 424)
        }
        description {
          raw
        }
      }
    }
    contentfulHero(node_locale: { eq: $language }) {
      name
      image {
        gatsbyImage(width: 800, placeholder: BLURRED)
      }
      description {
        description
      }
    }
  }
`;
