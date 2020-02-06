import { CREATE_ORDER } from "../actions/types";

const initialState = {
  order: {}
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        order: action.payload.newOrder
      };
    default:
      return state;
  }
};

export default orderReducer;
