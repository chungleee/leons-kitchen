import { CREATE_PAYMENT_INTENT } from "./types";
import axios from "axios";

export const createPaymentIntent = amount => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/payments/create-payment-intent", {
        amount
      });
      console.log("create payment intent action", res);
      // dispatch({
      //   type: CREATE_PAYMENT_INTENT,
      //   payload: res
      // })
    } catch (error) {
      console.error(error);
    }
  };
};
