import {
  CREATE_FOOD_ITEM,
  FETCH_FOOD_ITEMS,
  DELETE_FOOD_ITEM,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM
} from "../actions/types";

const initialState = {
  food_items: [],
  cart: [],
  subtotal: 0
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
        cart: [...state.cart, action.payload],
        subtotal: state.subtotal + Number(action.payload.price)
      };
    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(item => {
        return item._id !== action.payload._id;
      });
      return {
        ...state,
        cart: updatedCart
      };
    case INCREMENT_ITEM:
      state.cart.find(item => {
        if (item._id === action.payload) {
          return (item.count = item.count + 1);
        }
      });
      return {
        ...state
      };
    case DECREMENT_ITEM:
      state.cart.find(item => {
        if (item._id === action.payload) {
          return (item.count = item.count - 1);
        }
      });
      return {
        ...state
      };
    default:
      return state;
  }
};

export default foodReducer;
