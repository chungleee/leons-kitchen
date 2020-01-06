import { CREATE_FOOD_ITEM, FETCH_FOOD_ITEMS } from "../actions/types";

const initialState = {
  food_items: []
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FOOD_ITEM:
      return {
        ...state,
        food_items: [...state.food_items, action.payload]
      };
    case FETCH_FOOD_ITEMS:
      return {
        ...state,
        food_items: action.payload
      };
    default:
      return state;
  }
};

export default foodReducer;
