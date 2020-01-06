import React from "react";
import { Route } from "react-router-dom";
import FoodList from "./FoodList";
import CreateFoodItem from "./CreateFoodItem";

const FoodMenu = ({ match }) => {
  const { url } = match;
  return (
    <div>
      <Route
        exact
        path={`${url}`}
        render={props => {
          return <FoodList {...props} />;
        }}
      />
      <Route
        exact
        path={`${url}/create`}
        render={props => {
          return <CreateFoodItem {...props} />;
        }}
      />
    </div>
  );
};

export default FoodMenu;
