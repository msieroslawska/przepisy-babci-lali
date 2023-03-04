import React from "react";
import { Link, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import type { Asset } from "contentful";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Tags from "../components/tags";
import * as styles from "./recipe.module.css";
import { TypeRecipeFields } from "../types/recipe";

interface eProps {
  data: {
    contentfulRecipe: TypeRecipeFields;
    previous: any;
    next: any;
  };
  location: any;
}

const RecipeTemplate: React.FC<Props> = props => {
  const recipe = props.data.contentfulRecipe;
  const previous = props.data.previous;
  const next = props.data.next;
  const image = getImage(recipe.scannedImage);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { gatsbyImage, description } = node.data.target;
        const image = getImage(gatsbyImage);

        if (!image) {
          return null;
        }
        return <GatsbyImage image={image} alt={description} />;
      },
    },
  };

  const renderHero = () => {
    if (!image) {
      return null;
    }
    return (
      <Hero
        image={image}
        title={recipe.title}
        content={recipe.description.content}
      />
    );
  };

  return (
    <Layout location={props.location}>
      {renderHero()}
      <div className={styles.container}>
        <div className={styles.recipe}>
          <div className={styles.body}>
            {/* {recipe.description?.raw &&
              renderRichText(recipe.description, options)} */}
          </div>
          <Tags tags={recipe.tags} />
          {(previous || next) && (
            <nav>
              <ul className={styles.recipeNavigation}>
                {previous && (
                  <li>
                    <Link to={`/recipe/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/recipe/${next.slug}`} rel="next">
                      {next.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RecipeTemplate;

export const pageQuery = graphql`
  query RecipeBySlug(
    $slug: String!
    $previousRecipeSlug: String
    $nextRecipeSlug: String
  ) {
    contentfulRecipe(slug: { eq: $slug }) {
      slug
      title
      scannedImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      tags
      description {
        raw
      }
      ingredients {
        name
      }
    }
    previous: contentfulRecipe(slug: { eq: $previousRecipeSlug }) {
      slug
      title
    }
    next: contentfulRecipe(slug: { eq: $nextRecipeSlug }) {
      slug
      title
    }
  }
`;
