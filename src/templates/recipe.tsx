import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import RecipeHeader from "../components/recipeHeader";
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
  console.log(recipe);
  const renderRecipeHeader = () => {
    if (props.data.contentfulRecipe === null) {
      return null;
    }

    return <RecipeHeader {...props.data.contentfulRecipe} />;
  };

  const renderIngredients = ({ amount = "", unit = "", name }) => (
    <li>
      {amount} {unit} {name}
    </li>
  );

  const renderContent = () => {
    if (!props.data.contentfulRecipe?.description?.raw) {
      return null;
    }

    return renderRichText(props.data.contentfulRecipe.description);
  };

  const renderTags = () => {
    if (recipe.tags === null) {
      return null;
    }

    return <Tags tags={recipe.tags} />;
  };

  return (
    <Layout>
      {renderRecipeHeader()}
      <div className={styles.container}>
        <div className={styles.recipe}>
          <div className={styles.body}>
            <h2>Ingredients</h2>
            <ul>{recipe.ingredients?.map(renderIngredients)}</ul>

            <h2>Preparation</h2>
            {renderContent()}
            {/* {recipe.description?.raw &&
              renderRichText(recipe.description, options)} */}
          </div>
          {renderTags()}
          {(previous || next) && (
            <nav>
              <ul className={styles.recipeNavigation}>
                {previous && (
                  <li>
                    <Link to={`/recipes/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/recipes/${next.slug}`} rel="next">
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
        amount
        unit
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
