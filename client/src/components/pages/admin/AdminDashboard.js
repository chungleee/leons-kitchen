/** @jsx jsx */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { jsx } from "@emotion/core";
import theme from "../../../theme";
import CheckAuth from "../../HOC/CheckAuth";
import Navbar from "./presentations/Navbar";
import Employees from "./Employees";
import FoodMenu from "./FoodMenu";

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
    width: "100%",
    backgroundColor: theme.color.highlight
  }
};

const AdminDashboard = () => {
  return (
    <Router>
      <div css={styles.container}>
        <Navbar />
        <main css={styles.main}>
          <Route
            path="/admin/employees"
            render={() => {
              return <Employees />;
            }}
          />

          <Route
            path="/admin/food-menu"
            render={() => {
              return <FoodMenu />;
            }}
          />
        </main>
      </div>
    </Router>
  );
};

export default CheckAuth(AdminDashboard, ["admin"]);
