import React from "react";

import * as styles from "./tags.module.css";

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  if (tags?.length === 0) {
    return null;
  }

  return (
    <small className={styles.tags}>
      {tags.map(tag => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </small>
  );
};

export default Tags;
