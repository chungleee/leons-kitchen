import { ORDER_RECEIVED, ORDER_COMPLETE } from "./types";
import axios from "axios";

export const handleOrderReceived = order => {
  return dispatch => {
    dispatch({
      type: ORDER_RECEIVED,
      payload: order
    });
  };
};

export const handleOrderComplete = orderId => {
  return async dispatch => {
    const res = await axios.post(
      `https://leons-kitchen.appspot.com/api/orders/${orderId}/complete`
    );

    dispatch({
      type: ORDER_COMPLETE,
      payload: res.data
    });
  };
};
