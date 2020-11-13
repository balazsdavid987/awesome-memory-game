import styles from "./Grid.module.scss";

const Grid = ({ children, disabled }) => {
  return (
    <div
      style={{ pointerEvents: disabled ? "none" : "initial" }}
      className={styles.component}
    >
      {children}
    </div>
  );
};

export default Grid;
