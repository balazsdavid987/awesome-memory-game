import { combineReducers } from "redux";

import { SET_DECK_SIZE } from "./actions";

const initialState = { deckSize: 3 };

const game = (state = initialState, action) => {
  switch (action.type) {
    case SET_DECK_SIZE:
      return {
        ...state,
        deckSize: action.payload.size,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game,
});

export default rootReducer;
