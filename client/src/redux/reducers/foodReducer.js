import {
  CREATE_FOOD_ITEM,
  FETCH_FOOD_ITEMS,
  DELETE_FOOD_ITEM
} from "../actions/types";

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
    case DELETE_FOOD_ITEM:
      const deletedFood = action.payload;
      const updated_food_items = state.food_items.filter(item => {
        if (item._id !== deletedFood._id) {
          return item;
        }
      });
      return {
        ...state,
        food_items: updated_food_items
      };
    default:
      return state;
  }
};

export default foodReducer;
