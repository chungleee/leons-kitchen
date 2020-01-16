/**@jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import theme from "../../theme";
import {
  handleAddToCard,
  handleRemoveItem
} from "../../redux/actions/foodActions";

const Card = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      css={{
        borderRadius: "5px",
        maxWidth: "250px",
        margin: "0 1rem",
        cursor: "pointer",
        boxShadow: "2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )"
      }}
      onClick={() => {
        if (selected) {
          alert("Are you sure you want to remove this item?");
          setSelected(false);
          dispatch(handleRemoveItem(item));
        } else {
          dispatch(handleAddToCard(item));
          setSelected(true);
        }
      }}
    >
      <div css={{ width: "250px", height: "250px", position: "relative" }}>
        <img
          css={{ width: "100%", height: "100%" }}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdinnerthendessert.com%2Fwp-content%2Fuploads%2F2016%2F04%2FGeneral-Tsos-Chicken-4-680x453.jpg&f=1&nofb=1"
          alt="#"
        />
        {selected ? (
          <div
            css={{
              background: "black",
              opacity: "0.5",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0"
            }}
          >
            <p css={{ color: "white", textAlign: "center", marginTop: "50%" }}>
              ADDED
            </p>
          </div>
        ) : null}
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
      </div>
    </div>
  );
};
export default Card;
