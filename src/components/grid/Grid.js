import styles from "./Grid.module.scss";

const Grid = ({ children }) => {
  return <div className={styles.component}>{children}</div>;
};

export default Grid;
