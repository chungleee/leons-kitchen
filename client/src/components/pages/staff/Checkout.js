import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cart } = useSelector(state => {
    return state.foodItemsState;
  });
  return (
    <div>
      <h1>this is the checkout page</h1>
      <div>{JSON.stringify(cart)}</div>
    </div>
  );
};

export default Checkout;
