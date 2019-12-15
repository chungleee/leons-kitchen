/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import theme from "../../../theme";
import { NavLink } from "react-router-dom";
import CheckAuth from "../../HOC/CheckAuth";

const AdminDashboard = props => {
  return (
    <div
      css={{
        height: "100vh",
        display: "flex"
      }}
    >
      <aside
        css={{
          height: "100%",
          width: "33%",
          backgroundColor: theme.color.secondary
        }}
      >
        <div>Leon's Kitchen</div>
        <ul>
          <li>
            <NavLink to="/admin/employees">Employees</NavLink>
          </li>
          <li>
            <NavLink to="/admin/food-menu">Food menu</NavLink>
          </li>
        </ul>
      </aside>
      <main
        css={{
          height: "100%",
          width: "100%",
          backgroundColor: theme.color.highlight
        }}
      >
        <h1>something</h1>
      </main>
    </div>
  );
};

export default CheckAuth(AdminDashboard, ["admin"]);
