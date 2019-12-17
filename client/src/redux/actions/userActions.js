import { USER_LOGIN, CURRENT_USER } from "./types";
import axios from "axios";

export const handleUserLogin = credentials => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/users/login", credentials);

      if (window.localStorage) {
        localStorage.setItem("leon's kitchen jwtToken", res.data.token);
      }

      dispatch({
        type: USER_LOGIN,
        payload: res.data.user
      });
      // return res.data;
    } catch (error) {
      console.error(error);
    }
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
