/** @jsx jsx */
import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { jsx } from "@emotion/core";
import theme from "../../../../theme";
import EmployeeList from "../presentations/EmployeeList";
import CreateEmployee from "./CreateEmployee";
import EmployeeDetail from "./EmployeeDetail";

const dummies = [
  { id: 1, name: "leon chung", role: "staff" },
  { id: 2, name: "john doe", role: "staff" },
  { id: 3, name: "jane doe", role: "staff" }
];

const Employees = () => {
  return (
    <div
      css={{
        display: "flex",
        height: "100%"
      }}
    >
      <EmployeeList dummies={dummies} />
      <main
        css={{
          padding: "2rem",
          width: "100%",
          backgroundColor: `${theme.color.secondary}`
        }}
      >
        <Switch>
          <Route path="/admin/employees/create" component={CreateEmployee} />
          <Route path="/admin/employees/:userId" component={EmployeeDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default Employees;
