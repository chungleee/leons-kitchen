/**@jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchFoodItems } from "../../../redux/actions/foodActions";
import CheckAuth from "../../HOC/CheckAuth";
import Button from "../../common/Button";
import Card from "../../common/Card";
import Spinner from "../../common/Spinner/Spinner";
import FoodItem from "../../common/FoodItem";

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
    <div css={{ display: "flex", height: "100%" }}>
      <main
        css={{
          height: "100%",
          width: "75%"
        }}
      >
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            padding: "1rem",
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
          borderLeft: "1px solid lightgrey",
          width: "25%"
        }}
      >
        {cart.length === 0 ? (
          <p>What are you craving?</p>
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
        <Button>Pay</Button>
      </aside>
    </div>
  );
};

export default CheckAuth(OrderMenu, ["admin", "manager", "staff"]);
