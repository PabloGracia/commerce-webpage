import { TCurrentUser } from "../../App";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: TCurrentUser | null;
}

export type UserActionTypes = SetCurrentUserAction;

export type UserStateType = {
  currentUser: TCurrentUser | null;
};
