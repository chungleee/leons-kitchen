/**@jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FoodItem = ({ title, price, _id }) => {
  const dispatch = useDispatch();
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div>
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
      <div css={{ display: "flex" }}>
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
    </div>
  );
};
export default FoodItem;
