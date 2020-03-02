import { USER_LOGIN, CURRENT_USER, USER_LOGOUT, AUTH_ERROR } from "./types";
import axios from "axios";

export const JWT = "leon's kitchen jwtToken";

export const handleUserLogin = credentials => {
  return async dispatch => {
    try {
      const res = await axios.post(
        // "/api/users/login",
        "https://leons-kitchen.appspot.com/api/users/login",
        credentials
      );

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
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data
      });
      console.log(error.response);
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
    if (window.localStorage) {
      const token = localStorage.getItem(JWT);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    dispatch({
      type: CURRENT_USER,
      payload: decoded
    });
  };
};
