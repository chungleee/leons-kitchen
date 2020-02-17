import axios from "axios";
import { CREATE_ORDER } from "./types";

export const handleCreateOrder = data => {
  return async dispatch => {
    try {
      const result = await axios.post("/api/orders/create", data);
      if (result.data.success) {
        dispatch({
          type: CREATE_ORDER,
          payload: result.data
        });
      }
      return result;
    } catch (error) {
      console.error(error);
    }
  };
};
