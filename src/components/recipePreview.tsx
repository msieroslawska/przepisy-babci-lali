import React from "react";
import { Link } from "gatsby-plugin-intl";

import { Container } from "./";

import * as styles from "./styles/recipe-preview.module.css";
import { Recipes, TypeRecipeFields } from "../types";

type Props = { recipes: Recipes };

export const RecipePreview: React.FC<Props> = ({ recipes }) => {
  if (!recipes) return null;
  if (!Array.isArray(recipes)) return null;

  const renderRecipe = (recipe: TypeRecipeFields) => (
    <li key={recipe.slug}>
      <Link to={`/recipes/${recipe.slug}`} className={styles.link}>
        <h2 className={styles.title}>{recipe.title}</h2>
      </Link>

      <div className={styles.meta}></div>
    </li>
  );

  return (
    <Container>
      <ul className={styles.recipeList}>{recipes.map(renderRecipe)}</ul>
    </Container>
  );
};
