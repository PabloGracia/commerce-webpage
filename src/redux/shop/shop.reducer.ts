import { SHOP_DATA } from "./shop.data";
import { ShopStateType, ShopActionTypes } from "./shop.types";

const INITIAL_STATE: ShopStateType = {
  collections: SHOP_DATA
};

const shopReducer = (
  state: ShopStateType = INITIAL_STATE,
  action: ShopActionTypes
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
