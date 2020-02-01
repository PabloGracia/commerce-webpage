import { ProductInterface } from "../shop/shop.types";

export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";
export const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";

interface ToggleCartHiddenAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

interface AddItemsAction {
  type: typeof ADD_ITEM;
  payload: ProductInterface;
}

interface ClearItemFromCartAction {
  type: typeof CLEAR_ITEM_FROM_CART;
  payload: ProductInterface;
}

interface RemoveItem {
  type: typeof REMOVE_ITEM;
  payload: ProductInterface;
}

export type CartActionTypes =
  | ToggleCartHiddenAction
  | AddItemsAction
  | ClearItemFromCartAction
  | RemoveItem;

export type CartStateType = {
  hidden: boolean;
  cartItems: ProductInterface[];
};
