import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  useIntl,
  Link,
  FormattedMessage,
  IntlContextConsumer,
  changeLocale,
} from "gatsby-plugin-intl";

import * as styles from "./styles/navigation.module.css";
import { useLocale } from "../useLocale";
import { oppositeLanguage } from "../utils/language";
import { Language } from "../types";

interface Props {
  language: Language;
}

type NavigationLink = { name: string; link: string };
const LINKS: NavigationLink[] = [
  { name: "home", link: "/" },
  { name: "recipes", link: "/recipes" },
];

const Navigation: React.FC<Props> = props => {
  const renderNavigationLinks = (navigationLink: NavigationLink) => {
    return (
      <li className={styles.navigationItem}>
        <Link to={navigationLink.link} activeClassName="active">
          {navigationLink.name}
        </Link>
      </li>
    );
  };

  const renderLocaleButton = () => {
    const newLanguage = oppositeLanguage[props.language];

    const onClick = () => {
      changeLocale(newLanguage);
    };

    return <button onClick={onClick}>{newLanguage}</button>;
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

export default Navigation;
