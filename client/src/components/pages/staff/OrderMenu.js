/**@jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect, useState } from "react";
import theme from "../../../theme";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchFoodItems } from "../../../redux/actions/foodActions";
import CheckAuth from "../../HOC/CheckAuth";
import Button from "../../common/Button";
import Card from "../../common/Card";
import Spinner from "../../common/Spinner/Spinner";
import FoodItem from "../../common/FoodItem";

const categories = ["starter", "platter", "beverage", "dessert"];
const styles = {
  selectWrapper: {
    border: "1px solid black",
    width: "50%",
    margin: "1rem auto",
    padding: "0.5rem",
    "&:hover, :focus-within": {
      backgroundColor: `${theme.color.highlight}`,
      select: {
        backgroundColor: `${theme.color.highlight}`
      }
    }
  },
  select: {
    backgroundColor: "white",
    border: "none",
    height: "1.5rem",
    outlineColor: "white",
    width: "100%",
    textTransform: "capitalize",
    "&:hover, :focus": {
      backgroundColor: `${theme.color.highlight}`,
      outline: "none"
    }
  }
};

const OrderMenu = props => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchFoodItems());
    setLoading(false);
  }, []);

  const { food_items } = useSelector(state => {
    return state.foodItemsState;
  });

  const { cart } = useSelector(state => {
    return state.foodItemsState;
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div css={{ display: "flex", height: "100vh" }}>
      <main
        css={{
          width: "75%",
          overflowY: "scroll",
          height: "100%",
          borderRight: "0.5px solid lightgrey"
        }}
      >
        <div css={styles.selectWrapper}>
          <select name="category" css={styles.select}>
            <option>Select</option>
            {categories.map((category, idx) => {
              return (
                <option key={Date.now() + idx} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>

        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
          }}
        >
          {food_items.map(item => {
            return <Card key={item._id} item={item} />;
          })}
        </div>
      </main>
      <aside
        css={{
          width: "25%"
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            height: "100%"
          }}
        >
          <div css={{ overflowY: "scroll" }}>
            {cart.length === 0 ? (
              <div css={{ padding: "1rem", textAlign: "center" }}>
                <p>What are you craving?</p>
              </div>
            ) : (
              cart.map(i => {
                return (
                  <FoodItem
                    key={i._id}
                    _id={i._id}
                    title={i.title}
                    price={i.price}
                    count={i.count}
                  />
                );
              })
            )}
          </div>
          <Button css={{ marginTop: "auto" }}>Pay</Button>
        </div>
      </aside>
    </div>
  );
};

export default CheckAuth(OrderMenu, ["admin", "manager", "staff"]);
