/**@jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import theme from "../../theme";
import { handleAddToCard } from "../../redux/actions/foodActions";

const Card = ({ item }) => {
  let [count, setCount] = useState(0);

  const dispatch = useDispatch();
  return (
    <div
      css={{
        borderRadius: "5px",
        border: "1px solid black",
        maxWidth: "250px",
        marginBottom: "1rem"
      }}
    >
      <div css={{ width: "250px", height: "250px" }}>
        <img
          css={{ width: "100%", height: "100%" }}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdinnerthendessert.com%2Fwp-content%2Fuploads%2F2016%2F04%2FGeneral-Tsos-Chicken-4-680x453.jpg&f=1&nofb=1"
          alt="#"
        />
      </div>
      <div
        css={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <div css={{ textTransform: "capitalize" }} role="description">
          <h3>{item.title}</h3>
          <small>${item.price}</small>
        </div>
        <div role="count">
          <input
            type="number"
            onChange={event => {
              setCount(event.target.value);
            }}
          />
        </div>
        <div role="action">
          <button
            css={{
              display: "inline-block",
              border: "none",
              borderRadius: "100193px",
              backgroundColor: `${theme.color.highlight}`,
              padding: "1rem",
              margin: "none",
              textDecoration: "none",
              textAlign: "center",
              cursor: "pointer"
            }}
            onClick={() => {
              dispatch(handleAddToCard(item, count));
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
