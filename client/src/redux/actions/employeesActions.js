import { FETCH_EMPLOYEES, CREATE_USER, DELETE_USER, endpoint } from "./types";
import axios from "axios";

export const handleCreateEmployee = data => {
  return async dispatch => {
    try {
      const res = await axios.post(`${endpoint}/api/users/create`, data);
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
      const res = await axios.get(`${endpoint}/api/users/`);
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
      const res = await axios.delete(`${endpoint}/api/users/${employeeId}`);
      dispatch({
        type: DELETE_USER,
        payload: res.data.deletedUser
      });
    } catch (error) {
      console.error(error);
    }
  };
};
