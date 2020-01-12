/**@jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const FoodItem = ({ title, price }) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div css={{ height: "50px", width: "50px" }}>
        <img
          css={{ height: "100%", width: "100%", borderRadius: "100193px" }}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdinnerthendessert.com%2Fwp-content%2Fuploads%2F2016%2F04%2FGeneral-Tsos-Chicken-4-680x453.jpg&f=1&nofb=1"
          alt={title}
          sizes=""
        />
      </div>
      <h4>{title}</h4>
      <p>${price}</p>
    </div>
  );
};
export default FoodItem;
