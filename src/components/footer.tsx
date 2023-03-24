import React from "react";

import { Container } from "./";
import * as styles from "./styles/footer.module.css";

export const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built with <a href="https://contentful.com/">Contentful</a> and{" "}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{" "}
      <a href="https://github.com/msieroslawska/przepisy-babci-lali/">Source</a>{" "}
      (based on{" "}
      <a href="https://github.com/contentful/starter-gatsby-blog">
        this starter
      </a>
      )
    </div>
  </Container>
);
