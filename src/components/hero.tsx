import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./styles/hero.module.css";

type Props = Queries.HomeQuery["contentfulHero"];

const Hero: React.FC<Props> = props => {
  if (!props) {
    return null;
  }

  const { image, name, description } = props;

  const renderImage = () => {
    const gatsbyImage = getImage(image);

    return (
      gatsbyImage &&
      name && (
        <GatsbyImage className={styles.image} alt={name} image={gatsbyImage} />
      )
    );
  };

  return (
    <div className={styles.hero}>
      {renderImage()}
      <div className={styles.details}>
        <h1 className={styles.title}>{name}</h1>
        {description && description.description && (
          <div className={styles.content}>{description.description}</div>
        )}
      </div>
    </div>
  );
};

export default Hero;
