import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.component}>
      <div className={styles.container}>
        <img src="images/splendex-logo.svg" className={styles.logo} />
        <nav>
          <ul className={styles.navList}>
            <li>Rules</li>
            <li>Play</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
