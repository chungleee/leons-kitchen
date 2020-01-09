/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../../../../theme";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../../common/Spinner/Spinner";
import Button from "../../../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFetchFoodItems,
  handleDeleteFoodItem
} from "../../../../../redux/actions/foodActions";

const styles = {
  wrapper: {
    height: "100%",
    width: "90%",
    margin: "auto",
    overflow: "auto"
  },
  button: { marginTop: "3rem" },
  container: {
    overflow: "scroll"
  },
  rows: {
    display: "flex",
    border: `1px solid lightgrey`,
    borderRadius: "5px",
    margin: "1rem 0",
    alignItems: "center"
  },
  columns: { flex: "1", textAlign: "center" },
  icon: {
    position: "relative",
    right: "1rem",
    color: "red",
    cursor: "pointer"
  },
  capitalize: {
    textTransform: "capitalize"
  }
};

const FoodList = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const { url } = match;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchFoodItems());
    setLoading(false);
  }, []);

  const { food_items } = useSelector(state => {
    return state.foodItemsState;
  });

  if (loading === true) {
    return <Spinner />;
  }

  return (
    <div css={styles.wrapper}>
      <Button css={styles.button}>
        <Link to={`${url}/create`}>Create food item</Link>
      </Button>

      <div
        css={styles.rows}
        style={{
          padding: "0.5rem 0",
          backgroundColor: `${theme.color.highlight}`
        }}
      >
        <h3 css={styles.columns}>Food item</h3>
        <h3 css={styles.columns}>Category</h3>
        <h3 css={styles.columns}>Price</h3>
      </div>
      {!food_items.length ? (
        <div>No food items yet!</div>
      ) : (
        food_items.map(({ _id, title, category, price }) => {
          return (
            <div
              css={styles.rows}
              style={{
                padding: "0.5rem 0",
                textTransform: "capitalize"
              }}
              key={_id}
            >
              <h4 css={styles.columns}>{title}</h4>
              <p css={styles.columns}>{category}</p>
              <p css={styles.columns}>${price}</p>
              <span
                onClick={() => {
                  dispatch(handleDeleteFoodItem(_id));
                }}
                css={styles.icon}
              >
                <i className="far fa-trash-alt"></i>
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default FoodList;
