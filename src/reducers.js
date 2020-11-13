import { SET_DECK_SIZE } from "./actions";
import { START_NEW_GAME } from "./actions";
import { FLIP_CARDS } from "./actions";
import { DISABLE_CARDS } from "./actions";
import { INCREMENT_MOVES } from "./actions";
import { SET_BEST } from "./actions";

const initialState = {
  deckSize: 3,
  moves: 0,
  currentDeck: [],
  best: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DECK_SIZE:
      return {
        ...state,
        deckSize: payload.size,
      };
    case START_NEW_GAME: {
      return {
        ...state,
        currentDeck: [...payload.deck],
        moves: 0,
      };
    }
    case FLIP_CARDS: {
      const newDeck = state.currentDeck.map((card) =>
        payload.ids.includes(card.id)
          ? { ...card, flipped: !card.flipped }
          : { ...card }
      );
      return {
        ...state,
        currentDeck: newDeck,
      };
    }
    case DISABLE_CARDS: {
      const newDeck = state.currentDeck.map((card) =>
        payload.ids.includes(card.id)
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
      console.log(payload.moves);
      const newBest = { ...state.best };
      newBest[payload.deckSize] = payload.moves;

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
