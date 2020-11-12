import styles from "./Moves.module.scss";

const Moves = ({ current, best }) => {
  return (
    <div className={styles.component}>
      <div>
        <div>Moves:</div>
        <div className={styles.value}>{current}</div>
      </div>
      <div>
        <div>Best:</div>
        <div className={styles.value}>{best}</div>
      </div>
    </div>
  );
};

export default Moves;
