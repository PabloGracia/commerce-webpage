import {
  CartActionTypes,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from "./cart.types";
import { ProductInterface } from "../shop/shop.types";

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: ProductInterface): CartActionTypes => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (item: ProductInterface): CartActionTypes => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearItem = (item: ProductInterface): CartActionTypes => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});
