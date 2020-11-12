import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.component}>
      <div className={styles.container}>
        <img
          src="images/awesome-logo.svg"
          className={styles.logo}
          alt="Awesome Memory Game"
        />
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" activeClassName={styles.active} exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/play" activeClassName={styles.active}>
                Play
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
