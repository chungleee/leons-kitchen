import React from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { handleOrderReceived } from "../../../redux/actions/kitchenActions";
import { useEffect } from "react";

const Kitchen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io("/kitchen");
    socket.on("new_order", order => {
      dispatch(handleOrderReceived(order));
    });
  }, []);

  const { order_list } = useSelector(state => {
    return state.kitchenState;
  });

  return (
    <div style={{ width: "90%", margin: "auto" }}>
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
                className=" w-100 bg-white  pa3 bn bg-animate hover-bg-light-green dim"
                style={{ borderTop: "1px solid black" }}
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

export default Kitchen;
