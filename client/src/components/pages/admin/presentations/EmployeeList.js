/** @jsx jsx */
import React from "react";
import { NavLink } from "react-router-dom";
import { jsx } from "@emotion/core";
import theme from "../../../../theme";
import Spinner from "../../../common/Spinner/Spinner";

const styles = {
  wrapper: {
    width: "30%",
    backgroundColor: theme.color.primary,
    borderRight: "1px solid lightgrey",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    overflowY: "auto"
  },
  ul: {
    width: "70%",
    margin: "auto"
  },
  navlinks: {
    normal: {
      display: "block",
      marginTop: "0.5rem",
      padding: "1rem",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: `${theme.color.highlight}`,
        transition: "all 1s ease"
      }
    },
    active: {
      border: `1px solid ${theme.color.highlight}`
    }
  },
  p: { fontSize: "1.2rem" }
};

const EmployeeList = ({ employees }) => {
  if (!employees.length) {
    return <Spinner />;
  }

  return (
    <aside css={styles.wrapper}>
      <ul css={styles.ul}>
        <NavLink
          css={styles.navlinks.normal}
          activeStyle={styles.navlinks.active}
          exact
          to="/admin/employees/"
        >
          Create employee
        </NavLink>
        {employees.map(employee => {
          return (
            <NavLink
              css={styles.navlinks.normal}
              activeStyle={styles.navlinks.active}
              key={employee._id}
              to={{
                pathname: `/admin/employees/${employee._id}`,
                state: { employee }
              }}
            >
              <p
                css={styles.p}
              >{`${employee.firstName} ${employee.lastName}`}</p>
              <small>{employee.role}</small>
            </NavLink>
          );
        })}
      </ul>
    </aside>
  );
};

export default EmployeeList;
