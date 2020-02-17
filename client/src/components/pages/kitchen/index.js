import React from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { handleOrderReceived } from "../../../redux/actions/kitchenActions";
import { useEffect } from "react";
import checkAuth from "../../HOC/CheckAuth";
import axios from "axios";

const Kitchen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io("/kitchen");
    socket.on("new_order", order => {
      dispatch(handleOrderReceived(order));
    });

    return () => {
      socket.close();
    };
  }, []);

  const { order_list } = useSelector(state => {
    return state.kitchenState;
  });

  const handleOrderComplete = async orderId => {
    const res = await axios.post(`/api/orders/${orderId}/complete`);
    console.log("order complete handler", res);
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2 className="tc mb4 mt4">
        {!order_list.length ? "No orders placed yet" : "Orders list"}
      </h2>
      <div className="flex flex-wrap justify-center">
        {order_list.map(order => {
          return (
            <ul key={order._id} className="ba b--near-black">
              <h1>#{order.order_id}</h1>
              {order.food_items.map(food => {
                return (
                  <li className="pa3 bt" key={food._id}>
                    <p>{food.title}</p>
                  </li>
                );
              })}
              <button
                onClick={() => handleOrderComplete(order._id)}
                className="f4 w-100 db tc link dim pv3 black bg-washed-green bn pointer"
              >
                Complete
              </button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default checkAuth(Kitchen, ["kitchen"]);
