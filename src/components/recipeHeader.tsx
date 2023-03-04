import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./styles/hero.module.css";

type Props = Queries.RecipeBySlugQuery["contentfulRecipe"];

const RecipeHeader: React.FC<Props> = props => {
  if (!props) {
    return null;
  }

  const { image, title, source } = props;

  const renderImage = () => {
    const gatsbyImage = getImage(image);

    return (
      gatsbyImage &&
      title && (
        <GatsbyImage className={styles.image} alt={title} image={gatsbyImage} />
      )
    );
  };

  return (
    <div className={styles.hero}>
      {renderImage()}
      <div className={styles.details}>
        <h1 className={styles.title}>{title}</h1>
        {source && <h3 className={styles.content}>{source}</h3>}
      </div>
    </div>
  );
};

export default RecipeHeader;
