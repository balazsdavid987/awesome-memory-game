import { combineReducers } from "redux";

import { SET_DECK_SIZE } from "./actions";
import { START_NEW_GAME } from "./actions";
import { FLIP_CARD } from "./actions";
import { DISABLE_CARD } from "./actions";
import { INCREMENT_MOVES } from "./actions";
import { SET_BEST } from "./actions";

const initialState = {
  deckSize: 3,
  moves: null,
  currentDeck: [],
  best: { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
  imageSet: "",
  language: "en",
  theme: "light",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DECK_SIZE:
      return {
        ...state,
        deckSize: action.payload.size,
      };
    case START_NEW_GAME: {
      return {
        ...state,
        currentDeck: [...action.payload.deck],
        moves: 0,
      };
    }
    case FLIP_CARD: {
      const newDeck = state.currentDeck.map((card) =>
        card.id === action.payload.id
          ? { ...card, flipped: !card.flipped }
          : { ...card }
      );
      return {
        ...state,
        currentDeck: newDeck,
      };
    }
    case DISABLE_CARD: {
      const newDeck = state.currentDeck.map((card) =>
        card.id === action.payload.id
          ? { ...card, disabled: !card.disabled }
          : { ...card }
      );
      return {
        ...state,
        currentDeck: newDeck,
      };
    }
    case INCREMENT_MOVES: {
      return {
        ...state,
        moves: state.moves + 1,
      };
    }
    case SET_BEST: {
      const newBest = { ...state.best };
      newBest[action.payload.deckSize] = action.payload.moves;

      return {
        ...state,
        best: newBest,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
