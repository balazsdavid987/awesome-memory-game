import { useSelector, useDispatch } from "react-redux";
import { startNewGame } from "../../actions";

import { useLocation, useHistory } from "react-router-dom";

//import styles from "./StartNewGame.module.scss";

import Button from "../../components/button/Button";
import { createDeck } from "../../utils";
import { cardTypes } from "../../constants";

const StartNewGame = () => {
  const dispatch = useDispatch();
  const deckSize = useSelector((state) => state.game.deckSize);
  const location = useLocation();
  const history = useHistory();

  const onStartNewGame = () => {
    const deck = createDeck(cardTypes, deckSize);
    dispatch(startNewGame(deck));

    // időlimit miatt quickfix
    if (location.pathname !== "/play") {
      history.push("/play");
    }
  };

  return (
    <>
      <Button onClick={onStartNewGame} label="Start new game" type="primary" />
    </>
  );
};

export default StartNewGame;
