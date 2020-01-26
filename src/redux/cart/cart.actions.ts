import {
  CartActionTypes,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from "./cart.types";
import { IShopItem } from "../../pages/shop/shop.data";

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: IShopItem): CartActionTypes => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (item: IShopItem): CartActionTypes => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearItem = (item: IShopItem): CartActionTypes => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});
