import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Preview from "./Preview";
const stripe = window.Stripe("pk_test_bvyBrZbSRaMYEXOeznlkED2G00aTGv1zec");
const elements = stripe.elements();

const styles = {
  input: "input-reset ba br-pill pl3 h2 mb2 f5"
};

const card = elements.create("card", {
  classes: {
    base: "ba br-pill mb2"
  },
  style: {
    base: {
      fontSize: "16px"
    }
  }
});

const Checkout = ({ history }) => {
  const { client_secret } = useSelector(state => {
    return state.paymentState;
  });

  const { subtotal } = useSelector(state => {
    return state.foodItemsState;
  });

  const handlePay = async () => {
    try {
      const { paymentIntent } = await stripe.confirmCardPayment(client_secret, {
        payment_method: { card: card }
      });
      console.log("handle pay paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        history.push("/staff/invoice");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    card.mount("#card");
  }, []);

  return (
    <div className="flex vh-100">
      <aside className="w-70 br b--light-gray">
        <Preview />
      </aside>
      <div className="w-30" style={{ marginTop: "auto", marginBottom: "auto" }}>
        <form
          className="flex flex-column ph3"
          onSubmit={event => {
            event.preventDefault();
            handlePay(event);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name on card"
            className={styles.input}
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className={styles.input}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className={styles.input}
          />

          <div style={{ padding: ".5rem 1rem .5rem 1rem" }} id="card"></div>

          <div className="mt5 mb3">
            <h3 className="flex">
              Total price:{" "}
              <span style={{ marginLeft: "auto" }}>${subtotal}</span>
            </h3>
          </div>

          <button
            className="input-reset h2 ba b--black br-pill f5  bg-yellow pointer"
            type="submit"
          >
            Place your order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
