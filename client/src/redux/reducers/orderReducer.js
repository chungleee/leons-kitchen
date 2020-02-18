import { CREATE_ORDER, FETCH_ORDERS } from "../actions/types";

const initialState = {
  order: {},
  completed_orders: []
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        order: action.payload.newOrder
      };
    case FETCH_ORDERS:
      console.log(action.payload);
      return {
        ...state,
        completed_orders: action.payload
      };
    default:
      return state;
  }
};

export default orderReducer;
