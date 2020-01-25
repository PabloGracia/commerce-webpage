import { SET_CURRENT_USER, UserActionTypes, UserStateType } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (
  state: UserStateType = INITIAL_STATE,
  action: UserActionTypes
) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
