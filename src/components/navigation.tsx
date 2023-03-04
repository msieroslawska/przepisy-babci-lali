import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import * as styles from "./styles/navigation.module.css";

const Navigation: React.FC = () => {
  const data: Queries.NavigationQuery = useStaticQuery(graphql`
    query Navigation {
      allContentfulNavigation(filter: { node_locale: { eq: "en-US" } }) {
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
        <Link to={navigationLink?.link} activeClassName="active">
          {navigationLink?.name}
        </Link>
      </li>
    );
  };

  if (
    data.allContentfulNavigation === null ||
    data.allContentfulNavigation.nodes[0].navigationLink === null
  ) {
    return null;
  }

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <ul className={styles.navigation}>
        {data.allContentfulNavigation.nodes[0].navigationLink.map(
          renderNavigationLinks
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
