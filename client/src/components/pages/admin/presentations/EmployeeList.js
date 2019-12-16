/** @jsx jsx */
import React from "react";
import { NavLink } from "react-router-dom";
import { jsx } from "@emotion/core";
import theme from "../../../../theme";

const styles = {
  wrapper: {
    width: "25%",
    backgroundColor: theme.color.primary,
    borderRight: "1px solid lightgrey",
    paddingTop: "2rem"
  },
  ul: {
    width: "70%",
    margin: "auto"
  },
  navlinks: {
    normal: {
      display: "block",
      marginTop: "0.5rem",
      padding: "1rem"
    },
    active: {
      border: `1px solid ${theme.color.highlight}`
    }
  },
  p: { fontSize: "1.2rem" }
};

const EmployeeList = ({ dummies }) => {
  return (
    <aside css={styles.wrapper}>
      <ul css={styles.ul}>
        <NavLink
          css={styles.navlinks.normal}
          activeStyle={styles.navlinks.active}
          to="/admin/employees/create"
        >
          Create employee
        </NavLink>
        {dummies.map(dummy => {
          return (
            <NavLink
              css={styles.navlinks.normal}
              activeStyle={styles.navlinks.active}
              key={dummy.id}
              to={{
                pathname: `/admin/employees/${dummy.id}`,
                state: dummy
              }}
            >
              <p css={styles.p}>{dummy.name}</p>
              <small>{dummy.role}</small>
            </NavLink>
          );
        })}
      </ul>
    </aside>
  );
};

export default EmployeeList;
