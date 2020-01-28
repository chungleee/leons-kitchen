import React from "react";
import { Route, Switch } from "react-router-dom";
import OrderMenu from "./OrderMenu";
import CheckAuth from "../../HOC/CheckAuth";
import Checkout from "./Checkout";

const Staff = () => {
  return (
    <div>
      <Switch>
        <Route
          path="/staff"
          render={props => {
            return <OrderMenu {...props} />;
          }}
        />

        <Route
          path="/staff/checkout"
          render={props => {
            return <Checkout {...props} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default CheckAuth(Staff, ["admin", "manager", "staff"]);
