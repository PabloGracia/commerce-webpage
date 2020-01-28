import { UserStateType } from "./user/user.types";
import { CartStateType } from "./cart/cart.types";
import { DirectoryStateType } from "./directory/directory.types";
import { ShopStateType } from "./shop/shop.types";

export type StateType = {
  user: UserStateType;
  cart: CartStateType;
  directory: DirectoryStateType;
  shop: ShopStateType;
};
