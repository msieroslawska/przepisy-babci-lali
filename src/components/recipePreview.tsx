import React from "react";
import { Link } from "gatsby";

import Container from "./container";

import * as styles from "./styles/recipe-preview.module.css";
import { Locale, Recipes, TypeRecipeFields } from "../types";

type Props = { recipes: Recipes; language: string };

const RecipePreview: React.FC<Props> = ({ language, recipes }) => {
  if (!recipes) return null;
  if (!Array.isArray(recipes)) return null;

  // const filterBasedOnLocale = (recipe: TypeRecipeFields) => recipe.;

  const renderRecipe = (recipe: TypeRecipeFields) => (
    <li key={recipe.slug}>
      <Link to={`/recipes/${language}/${recipe.slug}`} className={styles.link}>
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

export default RecipePreview;
