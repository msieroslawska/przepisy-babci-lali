import React from "react";
import { Link } from "gatsby";

import Container from "./container";
import Tags from "./tags";

import { TypeRecipeFields } from "../types/recipe";

import * as styles from "./recipe-preview.module.css";

interface RecipePreviewProps {
  recipes: TypeRecipeFields[];
}

const RecipePreview: React.FC<RecipePreviewProps> = ({ recipes }) => {
  console.log("XXX RECIPES", recipes);
  if (!recipes) return null;
  if (!Array.isArray(recipes)) return null;

  const renderRecipe = (recipe: TypeRecipeFields) => (
    <li key={recipe.slug}>
      <Link to={`/recipe/${recipe.slug}`} className={styles.link}>
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
