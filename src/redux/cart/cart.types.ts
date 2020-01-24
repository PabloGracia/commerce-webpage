import { IShopItem } from "../../pages/shop/shop.data";

export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";

interface ToggleCartHiddenAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

interface AddItemsAction {
  type: typeof ADD_ITEM;
  payload: IShopItem;
}

export type CartActionTypes = ToggleCartHiddenAction | AddItemsAction;
