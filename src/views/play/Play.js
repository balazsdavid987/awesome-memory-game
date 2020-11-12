import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { flipCard, disableCard, incrementMoves, setBest } from "../../actions";

import styles from "./Play.module.scss";

import DeckSizeSelector from "../../components/deck-size-selector/DeckSizeSelector";
import StartNewGame from "../../components/start-new-game/StartNewGame";

import Grid from "../../components/grid/Grid";
import Card from "../../components/card/Card";

const Play = () => {
  const dispatch = useDispatch();
  const currentDeck = useSelector((state) => state.game.currentDeck);
  const decksize = currentDeck.length / 2;
  const moves = useSelector((state) => state.game.moves);
  const best = useSelector((state) => state.game.best);

  useEffect(() => {
    const remainingCards = currentDeck.filter(
      (card) => !card.flipped && !card.disabled
    );

    if (remainingCards.length === 0) {
      if (best[decksize] === 0 || moves < best[decksize]) {
        dispatch(setBest(decksize, moves));
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

  return (
    <>
      <div className={styles.header}>
        <div className={styles.stats}>
          <div>
            Moves:{" "}
            <span>
              {currentDeck === undefined || currentDeck.length === 0
                ? "-"
                : moves}
            </span>
          </div>
          <div>
            Best:{" "}
            <span>
              {currentDeck === undefined || currentDeck.length === 0
                ? "-"
                : best[decksize]}
            </span>
          </div>
        </div>
        <div className={styles.controls}>
          {/*időhiány miatt kihagytam, de ugyanazt csinálja mint a Start New Game
          {currentDeck !== undefined && currentDeck.length !== 0 && (
            <Button label="Restart" type="secondary" />
          )}*/}
          <DeckSizeSelector />
          <StartNewGame />
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
