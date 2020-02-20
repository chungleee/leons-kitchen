import axios from "axios";
import {
  CREATE_FOOD_ITEM,
  FETCH_FOOD_ITEMS,
  DELETE_FOOD_ITEM,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM
} from "./types";

export const handleCreateFoodItem = formData => {
  return async dispatch => {
    const res = await axios.post(
      "https://leons-kitchen.appspot.com/api/foods/create",
      formData
    );
    // const res = await axios.post("/api/foods/create", formData);
    dispatch({
      type: CREATE_FOOD_ITEM,
      payload: res.data.newFood
    });
  };
};

export const handleFetchFoodItems = () => {
  return async dispatch => {
    const res = await axios.get("https://leons-kitchen.appspot.com/api/foods/");
    // const res = await axios.get("/api/foods/");
    dispatch({
      type: FETCH_FOOD_ITEMS,
      payload: res.data.foods
    });
  };
};

export const handleDeleteFoodItem = id => {
  return async dispatch => {
    const res = await axios.delete(
      `https://leons-kitchen.appspot.com/api/foods/${id}`
    );
    // const res = await axios.delete(`/api/foods/${id}`);
    dispatch({
      type: DELETE_FOOD_ITEM,
      payload: res.data.food
    });
  };
};

export const handleAddToCart = item => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...item, count: 1 }
    });
  };
};

export const handleRemoveItem = item => {
  return dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    });
  };
};

export const handleIncrementItem = id => {
  return dispatch => {
    dispatch({
      type: INCREMENT_ITEM,
      payload: id
    });
  };
};

export const handleDecrementItem = id => {
  return dispatch => {
    dispatch({
      type: DECREMENT_ITEM,
      payload: id
    });
  };
};
