import React from "react";
import { Link, FormattedMessage } from "gatsby-plugin-intl";

import * as styles from "./styles/navigation.module.css";
import { NavigationLink } from "../types";

import { LocaleButton } from "./localeButton";

const LINKS: NavigationLink[] = [
  { name: "home", link: "/" },
  { name: "recipes", link: "/recipes" },
];

export const Navigation: React.FC = () => {
  const renderNavigationLinks = (navigationLink: NavigationLink) => {
    return (
      <li key={navigationLink.name} className={styles.navigationItem}>
        <Link to={navigationLink.link} activeClassName="active">
          <FormattedMessage id={`navigation.${navigationLink.name}`} />
        </Link>
      </li>
    );
  };

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <ul className={styles.navigation}>
        {LINKS.map(renderNavigationLinks)}
        <LocaleButton />
      </ul>
    </nav>
  );
};
