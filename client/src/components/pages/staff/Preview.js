/**@jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../common/Button";
import axios from "axios";
import { createPaymentIntent } from "../../../redux/actions/paymentActions";

const styles = {
  wrapper: { width: "90%", marginLeft: "auto", marginRight: "auto" },
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
  const [subtotal, setSubtotal] = useState(0);
  const { cart } = useSelector(state => {
    return state.foodItemsState;
  });

  const handleSubtotal = () => {
    let sum = 0;
    cart.forEach(item => {
      const itemTotal = item.price * item.count;
      sum += itemTotal;
    });
    console.log("sum", sum);
    setSubtotal(sum);
  };

  useEffect(() => {
    handleSubtotal();
    // dispatch(createPaymentIntent(subtotal));
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
      <div css={styles.total}>
        <div css={styles.totalDescription}>
          <h5>subtotal</h5>
          <h4>${subtotal}</h4>
          <p>Taxes are calculated at check out</p>
        </div>
        <div>
          <Button css={styles.edit}>
            <Link to="/staff" css={styles.link}>
              edit order
            </Link>
          </Button>
          <Button css={styles.checkout}>
            <Link to="/staff/checkout" css={styles.link}>
              check out
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
