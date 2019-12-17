/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchEmployees } from "../../../../redux/actions/employeesActions";
import { jsx } from "@emotion/core";
import theme from "../../../../theme";
import Spinner from "../../../common/Spinner/Spinner";
import EmployeeList from "../presentations/EmployeeList";
import CreateEmployee from "./CreateEmployee";
import EmployeeDetail from "./EmployeeDetail";

const dummies = [
  { id: 1, name: "leon chung", role: "staff" },
  { id: 2, name: "john doe", role: "staff" },
  { id: 3, name: "jane doe", role: "staff" }
];

const Employees = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { employees } = useSelector(state => {
    return state.employeesState;
  });
  useEffect(() => {
    dispatch(handleFetchEmployees());
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div
        css={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: "100%"
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div
      css={{
        display: "flex",
        height: "100%"
      }}
    >
      <EmployeeList dummies={dummies} employees={employees} />
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
