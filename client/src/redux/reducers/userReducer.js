import { USER_LOGIN } from "../actions/types";

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
    default:
      return state;
  }
};

export default userReducer;
