/** @jsx jsx */
import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { jsx } from "@emotion/core";
import theme from "../../../../theme";
import EmployeeList from "../presentations/EmployeeList";
import CreateEmployee from "./CreateEmployee";

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
      <main css={{ padding: "3rem" }}>
        <Route path="/admin/employees/create" component={CreateEmployee} />
        <Route path="/admin/employees/:userId" component={CreateEmployee} />
      </main>
    </div>
  );
};

export default Employees;
