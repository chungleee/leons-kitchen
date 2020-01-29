import React from "react";
import { Route, Switch } from "react-router-dom";
import OrderMenu from "./OrderMenu";
import CheckAuth from "../../HOC/CheckAuth";
import Preview from "./Preview";
import Checkout from "./Checkout";

const Staff = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/staff"
          render={props => {
            return <OrderMenu {...props} />;
          }}
        />

        <Route
          path="/staff/preview"
          render={props => {
            return <Preview {...props} />;
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
