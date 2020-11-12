import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  startNewGame,
  flipCard,
  disableCard,
  incrementMoves,
  setBest,
} from "../../actions";

import styles from "./Play.module.scss";

import Button from "../../components/ui/button/Button";
import Grid from "../../components/game/grid/Grid";
import Moves from "../../components/game/moves/Moves";
import Card from "../../components/game/card/Card";

import { createDeck } from "../../utils";
import { cardTypes } from "../../constants";

const Play = () => {
  const dispatch = useDispatch();
  const currentDeck = useSelector((state) => state.currentDeck);
  const deckSize = useSelector((state) => state.deckSize);
  const moves = useSelector((state) => state.moves);
  const best = useSelector((state) => state.best);

  useEffect(() => {
    if (currentDeck === undefined || currentDeck.length === 0) {
      return;
    }

    const remainingCards = currentDeck.filter(
      (card) => !card.flipped && !card.disabled
    );

    if (remainingCards.length === 0) {
      if (best[deckSize] === 0 || moves < best[deckSize]) {
        dispatch(setBest(deckSize, moves));
      }
    }
  });

  const onCardClicked = (id) => {
    if (currentDeck[id].disabled || currentDeck[id].flipped) {
      return;
    }

    const flippedCard = currentDeck.find(
      (card) => card.flipped && !card.disabled
    );

    if (flippedCard !== undefined) {
      if (flippedCard.image === currentDeck[id].image) {
        dispatch(flipCard(id));
        dispatch(disableCard(flippedCard.id));
        dispatch(disableCard(id));
      } else {
        dispatch(flipCard(id));

        // ez nem jó még így ha túl gyorsan kattint a user
        setTimeout(() => {
          dispatch(flipCard(flippedCard.id));
          dispatch(flipCard(id));
        }, 1000);
      }
      dispatch(incrementMoves());
    } else {
      dispatch(flipCard(id));
    }
  };

  const newGame = () => {
    const deck = createDeck(cardTypes, deckSize);
    dispatch(startNewGame(deck));
  };

  return (
    <>
      <div className={styles.header}>
        <Moves
          current={
            currentDeck === undefined || currentDeck.length === 0 ? "-" : moves
          }
          best={
            currentDeck === undefined || currentDeck.length === 0
              ? "-"
              : best[deckSize]
          }
        />
        <div className={styles.controls}>
          {currentDeck !== undefined && currentDeck.length !== 0 ? (
            <Button label="Restart" type="secondary" onClick={newGame} />
          ) : (
            <Button label="Start new game" type="primary" onClick={newGame} />
          )}
        </div>
      </div>
      <Grid>
        {currentDeck !== undefined &&
          currentDeck.length !== 0 &&
          currentDeck.map(({ image, flipped, disabled, id }) => (
            <Card
              clickHandler={onCardClicked}
              key={id}
              image={image}
              flipped={flipped}
              id={id}
              disabled={disabled}
            />
          ))}
      </Grid>
    </>
  );
};

export default Play;
