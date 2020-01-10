import {
  CREATE_FOOD_ITEM,
  FETCH_FOOD_ITEMS,
  DELETE_FOOD_ITEM,
  ADD_TO_CART
} from "../actions/types";

const initialState = {
  food_items: [],
  cart: []
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
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
};

export default foodReducer;
