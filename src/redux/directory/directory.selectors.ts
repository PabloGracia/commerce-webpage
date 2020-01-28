import { createSelector } from "reselect";

import { StateType } from "../root.types";

const selectDirectory = (state: StateType) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
