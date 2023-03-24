import React from "react";
import { graphql, PageProps } from "gatsby";

import { Hero, Layout, RecipePreview } from "../components/";
import { PageContextWithLocale } from "../types";

type Props = PageProps<Queries.HomeQuery, PageContextWithLocale>;

export const RootIndex: React.FC<Props> = props => {
  const renderHero = () => {
    if (props.data.contentfulHero === null) {
      return null;
    }

    return <Hero {...props.data.contentfulHero} />;
  };

  return (
    <Layout>
      {renderHero()}
      <RecipePreview recipes={props.data.allContentfulRecipe.nodes} />
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
