import { UserStateType } from "./user/user.types";
import { CartStateType } from "./cart/cart.types";

export type StateType = {
  user: UserStateType;
  cart: CartStateType;
};
