import { FETCH_EMPLOYEES, CREATE_USER, DELETE_USER } from "./types";
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
      dispatch({
        type: FETCH_EMPLOYEES,
        payload: res.data.users
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const handleDeleteEmployee = employeeId => {
  return async dispatch => {
    try {
      const res = await axios.delete(`/api/users/${employeeId}`);
      dispatch({
        type: DELETE_USER,
        payload: res.data.user
      });
    } catch (error) {
      console.error(error);
    }
  };
};
