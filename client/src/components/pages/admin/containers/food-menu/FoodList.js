/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme from "../../../../../theme";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../../common/Spinner/Spinner";
import Button from "../../../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchFoodItems } from "../../../../../redux/actions/foodActions";

const styles = {
  wrapper: {
    height: "100%",
    width: "90%",
    margin: "auto",
    overflow: "auto"
  },
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
  }
};

const FoodList = ({ match }) => {
  const { url } = match;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchFoodItems());
  }, []);

  const { food_items } = useSelector(state => {
    return state.foodItemsState;
  });

  if (!food_items.length) {
    return <Spinner />;
  }

  return (
    <div css={styles.wrapper}>
      <Button>
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

      {food_items.map(({ _id, title, category, price }) => {
        return (
          <div
            css={styles.rows}
            style={{
              padding: "0.5rem 0"
            }}
            key={_id}
          >
            <h4 css={styles.columns}>{title}</h4>
            <p css={styles.columns}>{category}</p>
            <p css={styles.columns}>${price}</p>
            <span css={styles.icon}>
              <i className="far fa-trash-alt"></i>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;
