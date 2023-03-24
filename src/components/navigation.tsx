import React from "react";
import { Link, FormattedMessage } from "gatsby-plugin-intl";

import * as styles from "./styles/navigation.module.css";
import { NavigationLink } from "../types";
import { useLanguage } from "../useLanguage";

const LINKS: NavigationLink[] = [
  { name: "home", link: "/" },
  { name: "recipes", link: "/recipes" },
];

export const Navigation: React.FC = () => {
  const { changeLanguage, oppositeLanguage } = useLanguage();

  const renderNavigationLinks = (navigationLink: NavigationLink) => {
    return (
      <li className={styles.navigationItem}>
        <Link to={navigationLink.link} activeClassName="active">
          <FormattedMessage id={`navigation.${navigationLink.name}`} />
        </Link>
      </li>
    );
  };

  const renderLocaleButton = () => {
    const onClick = () => {
      changeLanguage();
    };

    return <button onClick={onClick}>{oppositeLanguage}</button>;
  };

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <ul className={styles.navigation}>
        {LINKS.map(renderNavigationLinks)}
        {renderLocaleButton()}
      </ul>
    </nav>
  );
};
