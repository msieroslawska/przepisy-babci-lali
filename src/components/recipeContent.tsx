import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./styles/hero.module.css";

type Props = Queries.RecipeBySlugQuery["contentfulRecipe"];

const Content: React.FC<Props> = props => {
  if (!props) {
    return null;
  }

  const { image, title, description } = props;

  const renderImage = () => {
    const gatsbyImage = getImage(image);

    return (
      gatsbyImage &&
      title && (
        <GatsbyImage className={styles.image} alt={title} image={gatsbyImage} />
      )
    );
  };

  const renderText = () => {
    if (description === null) {
      return null;
    }

    // @TODO: This is wrong
    return description.raw;
  };

  return (
    <div className={styles.hero}>
      {renderImage()}
      <div className={styles.details}>
        <h1 className={styles.title}>{title}</h1>
        {description && <div className={styles.content}>{renderText()}</div>}
      </div>
    </div>
  );
};

export default Content;
