import { FETCH_EMPLOYEES, CREATE_USER, DELETE_USER } from "./types";
import axios from "axios";

const tokenItem = `leon's kitchen jwtToken`;
const token = localStorage.getItem(tokenItem);
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

export const handleCreateEmployee = data => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/users/create", data, config);
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
      const res = await axios.get("/api/users/", config);
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
      const res = await axios.delete(`/api/users/${employeeId}`, config);
      dispatch({
        type: DELETE_USER,
        payload: res.data.user
      });
    } catch (error) {
      console.error(error);
    }
  };
};
