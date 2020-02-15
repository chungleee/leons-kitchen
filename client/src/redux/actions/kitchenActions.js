import { ORDER_RECEIVED } from "./types";

export const handleOrderReceived = order => {
  console.log("order received handler", order);
  return dispatch => {
    dispatch({
      type: ORDER_RECEIVED,
      payload: order
    });
  };
};
