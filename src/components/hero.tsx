import React from "react";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import type { Asset } from "contentful";

import * as styles from "./hero.module.css";

interface Props {
  image?: Asset;
  title: string;
  content?: any;
}

const Hero: React.FC<Props> = ({ image, title, content }) => {
  if (!image) {
    return null;
  }

  const gatsbyImage = getImage(image);
  return (
    <div className={styles.hero}>
      {gatsbyImage && (
        <GatsbyImage className={styles.image} alt={title} image={gatsbyImage} />
      )}
      <div className={styles.details}>
        <h1 className={styles.title}>{title}</h1>
        {content && (
          <div className={styles.content}>{renderRichText(content)}</div>
        )}
      </div>
    </div>
  );
};

export default Hero;
