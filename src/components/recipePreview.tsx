import React from "react";
import { Link } from "gatsby";

import Container from "./container";
import Tags from "./tags";

import * as styles from "./styles/recipe-preview.module.css";
import { Locale, Recipes, TypeRecipeFields } from "../types";

type Props = { recipes: Recipes; locale: Locale };

const RecipePreview: React.FC<Props> = ({ locale, recipes }) => {
  if (!recipes) return null;
  if (!Array.isArray(recipes)) return null;

  const renderRecipe = (recipe: TypeRecipeFields) => (
    <li key={recipe.slug}>
      <Link to={`/recipes/${locale}/${recipe.slug}`} className={styles.link}>
        <h2 className={styles.title}>{recipe.title}</h2>
      </Link>

      <div className={styles.meta}>
        <Tags tags={recipe.tags} />
      </div>
    </li>
  );

  return (
    <Container>
      <ul className={styles.recipeList}>{recipes.map(renderRecipe)}</ul>
    </Container>
  );
};

export default RecipePreview;
