import React from "react";
import { graphql, PageProps } from "gatsby";
import { Link, FormattedMessage } from "gatsby-plugin-intl";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import { Layout, RecipeHeader } from "../components";
import * as styles from "./recipe.module.css";

type Props = PageProps<Queries.RecipeBySlugQuery>;

const RecipeTemplate: React.FC<Props> = props => {
  const recipe = props.data.contentfulRecipe;
  const previous = props.data.previous;
  const next = props.data.next;

  if (recipe === null) {
    return null;
  }

  const renderRecipeHeader = () => {
    if (props.data.contentfulRecipe === null) {
      return null;
    }

    return <RecipeHeader {...props.data.contentfulRecipe} />;
  };

  const renderIngredients = (ingredients: Queries.ContentfulIngredient) => {
    const quantity = ingredients.quantity?.quantityName ?? "";
    const unit = ingredients.unit?.unitName ?? "";
    const food = ingredients.food?.foodName;

    const ingredient = `${quantity} ${unit} ${food}`;

    return <li key={ingredient}>{ingredient}</li>;
  };

  const renderContent = () => {
    if (!recipe.description?.raw) {
      return null;
    }

    return renderRichText(recipe.description);
  };

  const renderTags = () => {
    // if (recipe.tags === null) {
    return null;
    // }

    // return <Tags tags={recipe.tags} />;
  };

  return (
    <Layout>
      {renderRecipeHeader()}
      <div className={styles.container}>
        <div className={styles.recipe}>
          <div className={styles.body}>
            <h2>
              <FormattedMessage id="recipe.ingredients" />
            </h2>
            <ul>{recipe.ingredients?.map(renderIngredients)}</ul>

            <h2>
              <FormattedMessage id="recipe.preparation" />
            </h2>
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
    $language: String
  ) {
    contentfulRecipe(slug: { eq: $slug }, node_locale: { eq: $language }) {
      slug
      title
      source
      image {
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
        quantity {
          quantityName
        }
        unit {
          unitName
        }
        food {
          foodName
        }
      }
    }
    previous: contentfulRecipe(
      slug: { eq: $previousRecipeSlug }
      node_locale: { eq: $language }
    ) {
      slug
      title
    }
    next: contentfulRecipe(
      slug: { eq: $nextRecipeSlug }
      node_locale: { eq: $language }
    ) {
      slug
      title
    }
  }
`;
