import { TCurrentUser } from "../../App";
import { SET_CURRENT_USER, UserActionTypes } from "./user.types";

export const setCurrentUser = (user: TCurrentUser | null): UserActionTypes => ({
  type: SET_CURRENT_USER,
  payload: user
});
