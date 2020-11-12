import styles from "./Welcome.module.scss";

import StartNewGame from "../../start-new-game/StartNewGame";

const Welcome = () => {
  return (
    <section>
      <h1 className={styles.title}>Awesome Memory Game</h1>
      <StartNewGame />
    </section>
  );
};

export default Welcome;
