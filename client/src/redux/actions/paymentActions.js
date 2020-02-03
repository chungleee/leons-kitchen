import { CREATE_PAYMENT_INTENT } from "./types";
import axios from "axios";

export const createPaymentIntent = amount => {
  return async dispatch => {
    try {
      console.log(amount);
      const res = await axios.post("/api/payments/create-payment-intent", {
        amount
      });
      console.log("create payment intent action", res.data);
      dispatch({
        type: CREATE_PAYMENT_INTENT,
        payload: res.data.client_secret
      });
    } catch (error) {
      console.error(error);
    }
  };
};
