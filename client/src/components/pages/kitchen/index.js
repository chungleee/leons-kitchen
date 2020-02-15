import React from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { handleOrderReceived } from "../../../redux/actions/kitchenActions";

const Kitchen = props => {
  const dispatch = useDispatch();
  const socket = io("/kitchen");

  socket.on("new_order", order => {
    dispatch(handleOrderReceived(order));
  });

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div className="flex flex-wrap justify-center">
        <ul
          className="ba b--near-black  w-25 ma2"
          style={{ minHeight: "50vh" }}
        >
          some content
        </ul>
      </div>
    </div>
  );
};

export default Kitchen;
