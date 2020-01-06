import axios from "axios";
import { CREATE_FOOD_ITEM, FETCH_FOOD_ITEMS } from "./types";

export const handleCreateFoodItem = values => {
  return async dispatch => {
    const res = await axios.post("/api/foods/create", values);
    dispatch({
      type: CREATE_FOOD_ITEM,
      payload: res.data.newFood
    });
  };
};

export const handleFetchFoodItems = () => {
  return async dispatch => {
    const res = await axios.get("/api/foods/");
    dispatch({
      type: FETCH_FOOD_ITEMS,
      payload: res.data.foods
    });
  };
};
