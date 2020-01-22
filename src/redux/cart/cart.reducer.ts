import { TOGGLE_CART_HIDDEN, CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action: CartActionTypes) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
