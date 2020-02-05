/**@jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPaymentIntent } from "../../../redux/actions/paymentActions";

const styles = {
  wrapper: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
    overflowY: "scroll"
  },
  h1: { marginTop: "3rem", marginBottom: "3rem" },
  li: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid lightgrey",
    padding: "3rem 0",
    "&:last-child": {
      borderBottom: "1px solid lightgrey"
    }
  },
  capitalize: { textTransform: "capitalize" },
  lowercase: { textTransform: "lowercase" },
  total: {
    padding: "3rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  totalDescription: {
    textTransform: "uppercase",
    textAlign: "right",
    marginBottom: "1.5rem",
    lineHeight: "1.7",
    h5: { fontWeight: "300" },
    p: { fontStyle: "italic" }
  },
  edit: {
    textTransform: "uppercase"
  },
  checkout: {
    textTransform: "uppercase",
    marginLeft: "0.5rem"
  },
  link: { color: "black", textDecoration: "none" }
};

const Preview = props => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => {
    return state.foodItemsState;
  });

  useEffect(() => {
    dispatch(createPaymentIntent(cart));
  }, []);

  return (
    <div css={styles.wrapper}>
      <h1 css={styles.h1}>Your order</h1>
      <ul>
        {cart.map(item => {
          return (
            <li key={item._id} css={styles.li}>
              <h3 css={styles.capitalize}>
                {item.title} <span css={styles.lowercase}>x</span> {item.count}
              </h3>
              <p>${item.price * item.count}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Preview;
