import { ORDER_RECEIVED } from "../actions/types";

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
    default:
      return state;
  }
};
