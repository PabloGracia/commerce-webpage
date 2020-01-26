import { createSelector } from "reselect";

import { StateType } from "../root.types";

const selectCart = (state: StateType) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + (cartItem.quantity as number),
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedPrice, cartItem) =>
      accumulatedPrice + cartItem.price * (cartItem.quantity as number),
    0
  )
);
