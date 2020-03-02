import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import io from "socket.io-client";
import Pusher from "pusher-js";
import {
  handleOrderReceived,
  handleOrderComplete
} from "../../../redux/actions/kitchenActions";
import { useEffect, useState } from "react";
import checkAuth from "../../HOC/CheckAuth";
import { JWT } from "../../../redux/actions/authActions";

const Kitchen = props => {
  const [connected, setConnected] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(JWT);
    const pusher = new Pusher("5089c804c7206edc1147", {
      cluster: "us2",
      authEndpoint: "https://leons-kitchen.appspot.com/api/orders/pusher/auth",
      auth: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    });
    const kitchen_channel = pusher.subscribe("private-kitchen_channel");

    pusher.connection.bind("state_change", states => {
      console.log(states);
      setConnected(states.current);
    });

    kitchen_channel.bind("new_order", data => {
      dispatch(handleOrderReceived(data));
    });

    return () => {
      pusher.disconnect();
    };

    // const socket = io("https://happy-swanson-24cf45.netlify.com/kitchen");
    // const socket = io("/kitchen");
    // socket.on("new_order", order => {
    //   dispatch(handleOrderReceived(order));
    // });
    // return () => {
    //   socket.close();
    // };
  }, []);

  const { order_list } = useSelector(state => {
    return state.kitchenState;
  });

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div className="tc mb4 mt4">
        <h2>{!order_list.length ? "No orders placed yet" : "Orders list"}</h2>
        <small>status: {connected}</small>
      </div>
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
                onClick={() => dispatch(handleOrderComplete(order._id))}
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
