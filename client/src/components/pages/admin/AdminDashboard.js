/** @jsx jsx */
import React from "react";
import { Route } from "react-router-dom";
import { jsx } from "@emotion/core";
import theme from "../../../theme";
import CheckAuth from "../../HOC/CheckAuth";
import Navbar from "./presentations/Navbar";
import Employees from "./containers/employees/Employees";
import FoodMenu from "./containers/food-menu/FoodMenu";
import Orders from "./containers/orders/Orders";

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    "& a": {
      textDecoration: "none",
      color: theme.text
    }
  },
  main: {
    height: "100%",
    width: "75%"
  }
};

const AdminDashboard = ({ match }) => {
  const { url } = match;
  return (
    <div css={styles.container}>
      <Navbar />
      <main css={styles.main}>
        <Route
          path={`${url}/employees`}
          render={props => {
            return <Employees {...props} />;
          }}
        />

        <Route
          path={`${url}/food-menu`}
          render={props => {
            return <FoodMenu {...props} />;
          }}
        />

        <Route
          path={`${url}/orders`}
          render={props => {
            return <Orders {...props} />;
          }}
        />
      </main>
    </div>
  );
};

export default CheckAuth(AdminDashboard, ["admin"]);
