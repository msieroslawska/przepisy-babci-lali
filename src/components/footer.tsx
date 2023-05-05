import React from "react";

import { useLanguage } from "../useLanguage";
import { Container, LocaleButton } from "./";

import * as styles from "./styles/footer.module.css";

const FORMAT_PREFIX = "footerBuild";

export const Footer = () => {
  const { format } = useLanguage();
  const websiteBuiltIn = format("websiteBuiltIn", FORMAT_PREFIX);
  const and = format("and", FORMAT_PREFIX);
  const source = format("source", FORMAT_PREFIX);
  const basedOn = format("basedOn", FORMAT_PREFIX);
  const starter = format("starter", FORMAT_PREFIX);

  const renderContentfulLink = () => (
    <a href="https://contentful.com/">Contentful</a>
  );
  const renderGatsbyLink = () => <a href="https://gatsbyjs.com">Gatsby</a>;
  const renderSourceLink = (source: string) => (
    <a href="https://github.com/msieroslawska/przepisy-babci-lali/">{source}</a>
  );
  const renderStarterLink = (starter: string) => (
    <a href="https://github.com/contentful/starter-gatsby-blog">{starter}</a>
  );

  const renderDot = () => <span className={styles.dot}>&middot;</span>;

  return (
    <Container as="footer">
      <div className={styles.container}>
        <LocaleButton />
        {renderDot()}
        <span>{`${websiteBuiltIn} `}</span>
        {renderContentfulLink()}
        <span>{` ${and} `}</span>
        {renderGatsbyLink()}
        {renderDot()}
        {renderSourceLink(source)}
        <span>{` (${basedOn} `}</span>
        {renderStarterLink(starter)}
        <span>{`)`}</span>
      </div>
    </Container>
  );
};
