import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Content from "../components/recipeContent";
import Tags from "../components/tags";
import * as styles from "./recipe.module.css";

type Props = PageProps<Queries.RecipeBySlugQuery>;

const RecipeTemplate: React.FC<Props> = props => {
  const recipe = props.data.contentfulRecipe;
  const previous = props.data.previous;
  const next = props.data.next;

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

  if (recipe === null) {
    return null;
  }

  const renderContent = () => {
    if (props.data.contentfulRecipe === null) {
      return null;
    }

    return <Content {...props.data.contentfulRecipe} />;
  };

  const renderTags = () => {
    if (recipe.tags === null) {
      return null;
    }

    return <Tags tags={recipe.tags} />;
  };

  return (
    <Layout>
      {renderContent()}
      <div className={styles.container}>
        <div className={styles.recipe}>
          <div className={styles.body}>
            {/* {recipe.description?.raw &&
              renderRichText(recipe.description, options)} */}
          </div>
          {renderTags()}
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
      image: scannedImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
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
