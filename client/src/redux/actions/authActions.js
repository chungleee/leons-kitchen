import { USER_LOGIN, CURRENT_USER, USER_LOGOUT } from "./types";
import axios from "axios";

const JWT = "leon's kitchen jwtToken";

export const handleUserLogin = credentials => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/users/login", credentials);

      if (window.localStorage) {
        localStorage.setItem(JWT, res.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.token}`;
      }

      dispatch({
        type: USER_LOGIN,
        payload: res.data.user
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const handleUserLogout = () => {
  return dispatch => {
    if (window.localStorage) {
      axios.defaults.headers.common["Authorization"] = null;
      localStorage.removeItem(JWT);
    }
    dispatch({
      type: USER_LOGOUT
    });
  };
};

export const handleCurrentUser = decoded => {
  return dispatch => {
    dispatch({
      type: CURRENT_USER,
      payload: decoded
    });
  };
};
