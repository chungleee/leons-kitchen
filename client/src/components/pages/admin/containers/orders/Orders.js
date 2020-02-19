import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleFetchOrders } from "../../../../../redux/actions/orderActions";
import Spinner from "../../../../common/Spinner/Spinner";

const Orders = props => {
  const dispatch = useDispatch();
  const { completed_orders } = useSelector(state => {
    return state.orderState;
  });
  useEffect(() => {
    dispatch(handleFetchOrders());
  }, []);

  if (!completed_orders.length) {
    return <Spinner />;
  }

  return (
    <div className="w-90 center">
      <div className="flex justify-between pv3 ba br3 mv3">
        <div className="tc w-25">
          <p>Order number</p>
        </div>
        <div className="tc w-25">
          <p className="ttc">Customer name</p>
        </div>
        <div className="tc w-25">
          <p>Payment type</p>
        </div>
        <div className="tc w-25">
          <p>Price total</p>
        </div>
      </div>
      {completed_orders.map(order => {
        return (
          <div key={order._id} className="flex justify-between pv3 ba br3 mv3">
            <div className="tc w-25">
              <p>{order.order_id}</p>
            </div>
            <div className="tc w-25">
              <p className="ttc">{order.order_for.name}</p>
            </div>
            <div className="tc w-25">
              <p>{order.payment_type}</p>
            </div>
            <div className="tc w-25">
              <p>${order.price_total}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
