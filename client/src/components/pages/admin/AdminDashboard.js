/** @jsx jsx */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { jsx } from "@emotion/core";
import theme from "../../../theme";
import CheckAuth from "../../HOC/CheckAuth";
import Navbar from "./presentations/Navbar";

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

const AdminDashboard = props => {
  return (
    <Router>
      <div css={styles.container}>
        <Navbar />
        <main css={styles.main}>
          <h1>something</h1>
        </main>
      </div>
    </Router>
  );
};

export default CheckAuth(AdminDashboard, ["admin"]);
