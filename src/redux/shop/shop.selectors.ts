import { createSelector } from "reselect";
import { StateType } from "../root.types";

const selectShop = (state: StateType) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
