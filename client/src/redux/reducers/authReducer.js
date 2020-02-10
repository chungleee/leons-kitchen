import {
  USER_LOGIN,
  CURRENT_USER,
  USER_LOGOUT,
  AUTH_ERROR
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    case CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default authReducer;
