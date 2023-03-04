import React from "react";

import * as styles from "./styles/tags.module.css";

interface Props {
  tags: Readonly<(string | null)[]>;
}

const Tags: React.FC<Props> = props => {
  if (!props.tags || props.tags.length === 0) {
    return null;
  }

  return (
    <small className={styles.tags}>
      {props.tags.map(tag => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </small>
  );
};

export default Tags;
