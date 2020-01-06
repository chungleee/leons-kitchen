import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../../common/Spinner/Spinner";
import Button from "../../../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchFoodItems } from "../../../../../redux/actions/foodActions";

const FoodList = ({ match }) => {
  const { url } = match;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchFoodItems());
  }, []);

  const { food_items } = useSelector(state => {
    return state.foodItemsState;
  });

  if (!food_items.length) {
    return <Spinner />;
  }

  return (
    <div>
      <Button>
        <Link to={`${url}/create`}>Create food item</Link>
      </Button>
      {food_items.map(({ id, title, category, price }) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{category}</p>
            <p>${price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;
