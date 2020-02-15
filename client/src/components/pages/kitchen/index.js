import React from "react";
import io from "socket.io-client";

const Kitchen = props => {
  const socket = io("/kitchen");
  socket.on("createOrder", data => {
    console.log(data);
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
