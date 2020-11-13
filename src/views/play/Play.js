import { useState, useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  startNewGame,
  flipCards,
  disableCards,
  incrementMoves,
  setBest,
} from "../../actions";

import styles from "./Play.module.scss";

import Button from "../../components/ui/button/Button";
import Grid from "../../components/game/grid/Grid";
import Moves from "../../components/game/moves/Moves";
import Card from "../../components/game/card/Card";
import DeckSizeSelector from "../../components/ui/deck-size-selector/DeckSizeSelector";

import { createDeck, isGameOver } from "../../utils";
import { cardTypes } from "../../constants";

const Play = () => {
  const dispatch = useDispatch();
  const currentDeck = useSelector((state) => state.currentDeck);
  const deckSize = useSelector((state) => state.deckSize);
  const moves = useSelector((state) => state.moves);
  const best = useSelector((state) => state.best);
  const [gridIsDisabled, setGridIsDisabled] = useState(false);
  const [isOver, setIsOver] = useState(false);

  const newGame = () => {
    const deck = createDeck(cardTypes, deckSize);
    dispatch(startNewGame(deck));
    setIsOver(false);
  };

  const checkFlippedCards = useCallback(() => {
    const flippedCards = currentDeck.filter(
      (card) => card.flipped && !card.disabled
    );

    if (flippedCards.length === 0) {
      if (isGameOver(currentDeck)) {
        setIsOver(true);
      }
      setGridIsDisabled(false);
      return;
    }

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (first.image === second.image) {
        dispatch(disableCards([first.id, second.id]));
      } else {
        setGridIsDisabled(true);
        setTimeout(() => {
          dispatch(flipCards([first.id, second.id]));
        }, 1000);
      }
      dispatch(incrementMoves());
    }
  }, [currentDeck, dispatch]);

  useEffect(() => {
    if (currentDeck.length === 0) {
      return;
    }

    checkFlippedCards();
  }, [currentDeck, checkFlippedCards]);

  useEffect(() => {
    if (moves === 0) {
      return;
    }

    const deckSize = currentDeck.length / 2;
    const currentBest = best[deckSize];
    if (isOver && (currentBest === 0 || moves < currentBest)) {
      dispatch(setBest(deckSize, moves));
    }
  }, [moves, isOver, best, currentDeck, dispatch]);

  const onCardClicked = (id) => {
    if (currentDeck[id].disabled || currentDeck[id].flipped) {
      return;
    }

    dispatch(flipCards([id]));
  };

  return (
    <>
      {currentDeck.length === 0 ? (
        <div className={styles.centered}>
          <Button
            label={`New game with ${2 * deckSize} cards`}
            type="primary"
            onClick={newGame}
          />
        </div>
      ) : (
        <div className={styles.header}>
          <Moves current={moves} best={best[currentDeck.length / 2]} />
          <div className={styles.controls}>
            <DeckSizeSelector />
            <Button label="Restart" type="secondary" onClick={newGame} />
          </div>
        </div>
      )}
      <Grid disabled={gridIsDisabled}>
        {currentDeck.length !== 0 &&
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
