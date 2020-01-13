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
        justifyContent: "space-between",
        padding: "1rem",
        borderBottom: "0.5px solid lightgrey"
      }}
    >
      <div css={{ textTransform: "capitalize" }}>
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
      <div css={{ display: "flex", alignItems: "center" }}>
        <i
          css={{ color: "red" }}
          onClick={() => {
            dispatch(handleDecrementItem(_id));
          }}
          className="far fa-minus-square fa-2x"
        ></i>

        <p css={{ padding: "0 0.5rem" }}>{count}</p>
        <i
          css={{ color: "green" }}
          onClick={() => {
            dispatch(handleIncrementItem(_id));
          }}
          className="far fa-plus-square fa-2x"
        ></i>
      </div>
    </div>
  );
};
export default FoodItem;
