import { useSelector, useDispatch } from "react-redux";
import { startNewGame } from "../../actions";

//import styles from "./StartNewGame.module.scss";

import Button from "../../components/button/Button";

import arrayShuffle from "array-shuffle";

const cardTypes = [
  "angular",
  "d3",
  "jenkins",
  "postcss",
  "react",
  "redux",
  "sass",
  "splendex",
  "ts",
  "webpack",
];

const StartNewGame = () => {
  const dispatch = useDispatch();
  const deckSize = useSelector((state) => state.game.deckSize);

  const onStartNewGame = () => {
    let cards = cardTypes.slice(0, deckSize);
    cards = cards.reduce((result, card) => [...result, card, card], []);
    cards = arrayShuffle(cards);
    const deck = cards.map((card, i) => ({
      image: card,
      flipped: false,
      disabled: false,
      id: i,
    }));
    //console.log(deck);
    dispatch(startNewGame(deck));
  };

  return (
    <>
      <Button onClick={onStartNewGame} label="Start new game" type="primary" />
    </>
  );
};

export default StartNewGame;
