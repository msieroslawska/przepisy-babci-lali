import React from "react";
import { Link } from "gatsby";

import * as styles from "./styles/navigation.module.css";

const Navigation: React.FC = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Strona główna
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/recipes/" activeClassName="active">
          Przepisy
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
