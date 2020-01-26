import { createSelector } from "reselect";
import { StateType } from "../root.types";

const selectUser = (state: StateType) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
