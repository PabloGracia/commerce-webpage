import { createSelector } from "reselect";
import { StateType } from "../root.types";
import { AVAILABLE_PAGES } from "../../pages/collection/collection.types";

const selectShop = (state: StateType) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    Object.keys(collections).map((key) => collections[key as AVAILABLE_PAGES])
);

export const selectCollection = (
  collectionUrlParam: "hats" | "sneakers" | "jackets" | "womens" | "mens"
) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
