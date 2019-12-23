/** @jsx jsx */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { jsx } from "@emotion/core";
import theme from "../../../theme";
import CheckAuth from "../../HOC/CheckAuth";
import Navbar from "./presentations/Navbar";
import Employees from "./containers/Employees";
import FoodMenu from "./containers/FoodMenu";

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
      </main>
    </div>
  );
};

export default CheckAuth(AdminDashboard, ["admin"]);
