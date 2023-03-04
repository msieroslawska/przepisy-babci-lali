import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import * as styles from "./styles/navigation.module.css";
import { useLocale } from "../useLocale";

const Navigation: React.FC = () => {
  const { locale, changeLocale } = useLocale();

  const data = useStaticQuery(graphql`
    query LocalizedNavigation {
      en: allContentfulNavigation(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          navigationLink {
            name
            link
          }
        }
      }
      pl: allContentfulNavigation(filter: { node_locale: { eq: "pl" } }) {
        nodes {
          navigationLink {
            name
            link
          }
        }
      }
    }
  `);

  const renderNavigationLinks = (
    navigationLink: { link: string | null; name: string | null } | null
  ) => {
    if (!navigationLink?.link) {
      return null;
    }

    return (
      <li className={styles.navigationItem}>
        <Link to={`${navigationLink?.link}/${locale}`} activeClassName="active">
          {navigationLink?.name}
        </Link>
      </li>
    );
  };

  if (
    data.en === null ||
    data.pl === null ||
    data.en.nodes[0].navigationLink === null ||
    data.pl.nodes[0].navigationLink === null
  ) {
    return null;
  }

  const localizedNavigation = locale === "pl" ? data.pl : data.en;
  const renderLocaleButton = () => {
    const onClick = () => {
      changeLocale();
    };
    return <button onClick={onClick}>{locale.toUpperCase()}</button>;
  };

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <ul className={styles.navigation}>
        {localizedNavigation.nodes[0].navigationLink.map(renderNavigationLinks)}
        {renderLocaleButton()}
      </ul>
    </nav>
  );
};

export default Navigation;
