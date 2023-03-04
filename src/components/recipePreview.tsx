import React from "react";
import { Link } from "gatsby";

import Container from "./container";
import Tags from "./tags";

import { TypeRecipeFields } from "../types/recipe";

import * as styles from "./styles/recipe-preview.module.css";

// @TODO: FIX
type Props = { recipes: Readonly<any[]> };

const RecipePreview: React.FC<Props> = ({ recipes }) => {
  if (!recipes) return null;
  if (!Array.isArray(recipes)) return null;

  const renderRecipe = (recipe: TypeRecipeFields) => (
    <li key={recipe.slug}>
      <Link to={`/recipes/${recipe.slug}`} className={styles.link}>
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
