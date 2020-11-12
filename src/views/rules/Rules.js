import styles from "./Rules.module.scss";

import DeckSizeSelector from "../../components/deck-size-selector/DeckSizeSelector";
import StartNewGame from "../../components/start-new-game/StartNewGame";

const Rules = () => {
  return (
    <>
      <h1 className={styles.title}>Splendex Memory Game</h1>
      <h2>Rules</h2>
      <ol>
        <li>Present the user with an even number of cards, "face down".</li>
        <li>
          When the user clicks a card, "flip it over" and reveal the hidden
          image.
        </li>
        <li>
          When two cards are revealed:
          <ul>
            <li>If the cards are identical, remove them from play.</li>
            <li>If they are not, flip them back.</li>
          </ul>
        </li>
        <li>The game ends when all the cards are removed.</li>
      </ol>
      <hr />
      <div style={{ textAlign: "center" }}>
        <DeckSizeSelector />
        <StartNewGame />
      </div>
    </>
  );
};

export default Rules;
