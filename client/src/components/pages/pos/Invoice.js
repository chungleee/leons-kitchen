import React from "react";
import { useSelector } from "react-redux";

const Invoice = props => {
  const { order } = useSelector(state => {
    return state.orderState;
  });
  return (
    <div>
      <h3>
        Hey {order.order_for} - thank you for your order. We are cooking up your
        meal!
      </h3>
      <h2>Here is your order #: {order.order_id}</h2>
    </div>
  );
};

export default Invoice;
