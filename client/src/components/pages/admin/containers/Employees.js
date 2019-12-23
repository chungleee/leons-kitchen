/** @jsx jsx */
import React, { useEffect } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchEmployees } from "../../../../redux/actions/employeesActions";
import { jsx } from "@emotion/core";
import theme from "../../../../theme";
import EmployeeList from "../presentations/EmployeeList";
import CreateEmployee from "./CreateEmployee";
import EmployeeDetail from "./EmployeeDetail";

const Employees = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchEmployees());
  }, []);

  const { employees } = useSelector(state => {
    return state.employeesState;
  });

  return (
    <div
      css={{
        display: "flex",
        height: "100%"
      }}
    >
      <EmployeeList employees={employees} />
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
