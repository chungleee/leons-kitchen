/** @jsx jsx */
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchEmployees } from "../../../../redux/actions/employeesActions";
import { jsx } from "@emotion/core";
import theme from "../../../../theme";
import EmployeeList from "../presentations/EmployeeList";
import CreateEmployee from "./CreateEmployee";
import EmployeeDetail from "./EmployeeDetail";

const Employees = ({ match }) => {
  const { url } = match;
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
          width: "70%",
          backgroundColor: `${theme.color.secondary}`
        }}
      >
        <Switch>
          <Route exact path={`${url}`} component={CreateEmployee} />
          <Route path={`${url}/:userId`} component={EmployeeDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default Employees;
