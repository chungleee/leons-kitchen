import { USER_LOGIN, CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
