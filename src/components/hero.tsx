import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import * as styles from "./hero.module.css";

interface HeroProps {
  image: IGatsbyImageData;
  title: string;
  content: {
    __typename: string;
    contentful_id: string;
    raw: string;
    references: any[];
  };
}

const Hero: React.FC<HeroProps> = ({ image, title, content }) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )}
    </div>
  </div>
);

export default Hero;
