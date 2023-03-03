import React from "react";
import { Link } from "gatsby";

import Container from "./container";
import Tags from "./tags";
import * as styles from "./article-preview.module.css";
import { TypeRecipeFields } from "../types/recipe";

interface RecipePreviewProps {
  recipes: TypeRecipeFields[];
}

const RecipePreview: React.FC<RecipePreviewProps> = ({ recipes }) => {
  if (!recipes) return null;
  if (!Array.isArray(recipes)) return null;

  return (
    <Container>
      <ul className={styles.articleList}>
        {recipes.map(recipe => {
          return (
            <li key={recipe.slug}>
              <Link to={`/recipe/${recipe.slug}`} className={styles.link}>
                <h2 className={styles.title}>{recipe.title}</h2>
              </Link>

              <div className={styles.meta}>
                <Tags tags={recipe.tags} />
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default RecipePreview;
