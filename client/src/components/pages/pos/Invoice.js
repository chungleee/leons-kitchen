import React from "react";
import { useSelector } from "react-redux";

const Invoice = props => {
  const { order } = useSelector(state => {
    return state.orderState;
  });
  return (
    <div className="vh-100 flex items-center justify-center ph3">
      <div className="tc mb6">
        <i className="far fa-check-circle fa-7x green"></i>
        <p className="mt3 mb3">
          Hey <span className="capitalize">{order.order_for.name}</span>,
        </p>
        <p className="b f3">Your order #{order.order_id} has been confirmed!</p>
      </div>
    </div>
  );
};

export default Invoice;
