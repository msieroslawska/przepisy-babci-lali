import React from "react";
import { Link } from "gatsby";

import { Container } from "./";

import * as styles from "./styles/recipe-preview.module.css";
import { Recipes, TypeRecipeFields } from "../types";
import { useLanguage } from "../useLanguage";

type Props = { recipes: Recipes };

export const RecipePreview: React.FC<Props> = ({ recipes }) => {
  if (!recipes) return null;
  if (!Array.isArray(recipes)) return null;
  const { language } = useLanguage();

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
