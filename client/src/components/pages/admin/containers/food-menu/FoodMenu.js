import React from "react";
import { Route } from "react-router-dom";
import FoodList from "./FoodList";
import CreateFoodItem from "./CreateFoodItem";

const FoodMenu = ({ match }) => {
  const { url } = match;
  const dummies = [
    {
      id: 1,
      title: "general tao",
      category: "platter",
      price: "12"
    },
    {
      id: 2,
      title: "wonton soup",
      category: "starter",
      price: "3"
    },
    {
      id: 3,
      title: "brownies",
      category: "dessert",
      price: "5"
    },
    {
      id: 4,
      title: "coca cola",
      category: "beverage",
      price: "2"
    },
    {
      id: 5,
      title: "gamjatang",
      category: "custom",
      price: "12"
    }
  ];

  return (
    <div>
      <Route
        exact
        path={`${url}`}
        render={props => {
          return <FoodList {...props} dummies={dummies} />;
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
