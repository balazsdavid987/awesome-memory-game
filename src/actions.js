export const SET_DECK_SIZE = "SET_DECK_SIZE";
export const START_NEW_GAME = "START_NEW_GAME";
export const FLIP_CARD = "FLIP_CARD";
export const DISABLE_CARD = "DISABLE_CARD";
export const INCREMENT_MOVES = "INCREMENT_MOVES";
export const SET_BEST = "SET_BEST";

export const setDeckSize = (size) => ({
  type: SET_DECK_SIZE,
  payload: { size },
});

export const startNewGame = (deck) => ({
  type: START_NEW_GAME,
  payload: { deck },
});

export const flipCard = (id) => ({
  type: FLIP_CARD,
  payload: { id },
});

export const disableCard = (id) => ({
  type: DISABLE_CARD,
  payload: { id },
});

export const incrementMoves = () => ({
  type: INCREMENT_MOVES,
});

export const setBest = (deckSize, moves) => ({
  type: SET_BEST,
  payload: { deckSize, moves },
});
