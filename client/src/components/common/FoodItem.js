/**@jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleIncrementItem,
  handleDecrementItem
} from "../../redux/actions/foodActions";

const FoodItem = ({ title, price, _id, count }) => {
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
        <button
          onClick={() => {
            dispatch(handleDecrementItem(_id));
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            dispatch(handleIncrementItem(_id));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default FoodItem;
