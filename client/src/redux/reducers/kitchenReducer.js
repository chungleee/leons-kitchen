import { ORDER_RECEIVED, ORDER_COMPLETE } from "../actions/types";

const initialState = {
  order_list: []
};

export const kitchenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_RECEIVED:
      return {
        ...state,
        order_list: [...state.order_list, action.payload]
      };
    case ORDER_COMPLETE:
      const filtered_order_list = state.order_list.filter(order => {
        return order._id !== action.payload.order._id;
      });
      return {
        ...state,
        order_list: filtered_order_list
      };
    default:
      return state;
  }
};
