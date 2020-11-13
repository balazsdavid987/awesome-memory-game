export const SET_DECK_SIZE = "SET_DECK_SIZE";
export const START_NEW_GAME = "START_NEW_GAME";
export const FLIP_CARDS = "FLIP_CARDS";
export const DISABLE_CARDS = "DISABLE_CARDS";
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

export const flipCards = (ids) => ({
  type: FLIP_CARDS,
  payload: { ids },
});

export const disableCards = (ids) => ({
  type: DISABLE_CARDS,
  payload: { ids },
});

export const incrementMoves = () => ({
  type: INCREMENT_MOVES,
});

export const setBest = (deckSize, moves) => ({
  type: SET_BEST,
  payload: { deckSize, moves },
});
