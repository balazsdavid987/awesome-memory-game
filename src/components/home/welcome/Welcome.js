import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { startNewGame } from "../../../actions";

import styles from "./Welcome.module.scss";

import Button from "../../ui/button/Button";
import DeckSizeSelector from "../../ui/deck-size-selector/DeckSizeSelector";

import { createDeck, isGameOver } from "../../../utils";
import { cardTypes } from "../../../constants";

const Welcome = () => {
  const dispatch = useDispatch();
  const deckSize = useSelector((state) => state.deckSize);
  const currentDeck = useSelector((state) => state.currentDeck);
  const history = useHistory();

  const onNewGameClicked = () => {
    const deck = createDeck(cardTypes, deckSize);
    dispatch(startNewGame(deck));

    history.push("/play");
  };

  const onContinueGameClicked = () => {
    history.push("/play");
  };

  return (
    <section>
      <h1 className={styles.title}>Awesome Memory Game</h1>
      <div className={styles.cta}>
        <DeckSizeSelector />
        <Button label="New game" type="primary" onClick={onNewGameClicked} />
        {currentDeck && !isGameOver(currentDeck) && (
          <>
            <span className={styles.or}>or</span>
            <Button
              label="Continue"
              type="secondary"
              onClick={onContinueGameClicked}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Welcome;
