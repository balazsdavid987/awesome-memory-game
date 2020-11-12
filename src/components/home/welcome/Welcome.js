import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { startNewGame } from "../../../actions";

import styles from "./Welcome.module.scss";

import Button from "../../ui/button/Button";

import { createDeck } from "../../../utils";
import { cardTypes } from "../../../constants";

const Welcome = () => {
  const dispatch = useDispatch();
  const deckSize = useSelector((state) => state.game.deckSize);
  const currentDeck = useSelector((state) => state.game.currentDeck);
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
      <Button
        label="Start new game"
        type="primary"
        onClick={onNewGameClicked}
      />
      {currentDeck !== undefined && currentDeck.length !== 0 && (
        <Button
          label="Continue game"
          type="secondary"
          onClick={onContinueGameClicked}
        />
      )}
    </section>
  );
};

export default Welcome;
