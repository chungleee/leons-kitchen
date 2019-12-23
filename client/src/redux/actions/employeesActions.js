import { FETCH_EMPLOYEES, CREATE_USER } from "./types";
import axios from "axios";

export const handleCreateEmployee = data => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/users/create", data);

      dispatch({
        type: CREATE_USER,
        payload: res.data.newUser
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const handleFetchEmployees = () => {
  return async dispatch => {
    try {
      const res = await axios.get("/api/users/");
      console.log("handle fetch users", res.data);
      dispatch({
        type: FETCH_EMPLOYEES,
        payload: res.data.users
      });
    } catch (error) {
      console.error(error);
    }
  };
};
