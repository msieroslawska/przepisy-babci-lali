import React from "react";
import { Link } from "gatsby";

import * as styles from "./navigation.module.css";

const Navigation: React.FC = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>Przepisy Babci Lali</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Strona główna
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/recipe/" activeClassName="active">
          Przepisy
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
