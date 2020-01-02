import React from "react";
import { Link } from "react-router-dom";

const FoodList = ({ dummies, match }) => {
  const { url } = match;
  return (
    <div>
      <Link to={`${url}/create`}>Create food item</Link>
      {dummies.map(({ id, title, category, price }) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;
