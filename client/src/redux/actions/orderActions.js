import axios from "axios";
import { CREATE_ORDER } from "./types";

export const handleCreateOrder = data => {
  return async dispatch => {
    const result = await axios.post("/api/orders/create", data);
    console.table(result);
    dispatch({
      type: CREATE_ORDER,
      payload: result.data
    });
  };
};
