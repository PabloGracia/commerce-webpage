import { CartActionTypes, TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cart.types";
import { IShopItem } from "../../pages/shop/shop.data";

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: IShopItem): CartActionTypes => ({
  type: ADD_ITEM,
  payload: item
});
