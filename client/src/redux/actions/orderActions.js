import axios from "axios";
import { CREATE_ORDER, FETCH_ORDERS } from "./types";

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

export const handleFetchOrders = () => {
  return async dispatch => {
    try {
      const result = await axios.get("/api/orders");
      console.log("fetch orders", result);
      if (result.data.success) {
        dispatch({
          type: FETCH_ORDERS,
          payload: result.data.data
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};
