import React from "react";
import { useEffect } from "react";
const stripe = window.Stripe("pk_test_bvyBrZbSRaMYEXOeznlkED2G00aTGv1zec");
const elements = stripe.elements();

const Checkout = props => {
  const card = elements.create("card", {
    classes: {
      base: "ba br-pill"
    },
    style: {
      base: {
        fontSize: "16px"
      }
    }
  });

  useEffect(() => {
    card.mount("#card");
  }, []);

  return (
    <div className="w-50" style={{ margin: "auto" }}>
      <h1>this is checkout page</h1>
      <form className="flex flex-column">
        <input
          type="text"
          name="name"
          placeholder="Name on card"
          className="input-reset ba br-pill pl3 h2 mb2 f5"
        />
        <div className="flex mb2">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input-reset ba br-pill pl3 h2 w-50 f5"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="input-reset ba br-pill pl3 h2 w-50 f5"
          />
        </div>

        <div style={{ padding: ".5rem 1rem .5rem 1rem" }} id="card"></div>
      </form>
    </div>
  );
};

export default Checkout;
