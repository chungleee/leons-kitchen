import { CREATE_PAYMENT_INTENT } from "../actions/types";

const initialState = {
  client_secret: ""
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_INTENT:
      return {
        ...state,
        client_secret: action.payload
      };
    default:
      return state;
  }
};

export default paymentReducer;
