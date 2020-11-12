import styles from "./Moves.module.scss";

const Moves = ({ current, best }) => {
  return (
    <div className={styles.component}>
      <div>
        Moves: <span>{current}</span>
      </div>
      <div>
        Best: <span>{best}</span>
      </div>
    </div>
  );
};

export default Moves;
