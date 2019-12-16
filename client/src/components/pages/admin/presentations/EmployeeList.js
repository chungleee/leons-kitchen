/** @jsx jsx */
import React from "react";
import { NavLink } from "react-router-dom";
import { jsx } from "@emotion/core";
import theme from "../../../../theme";

const EmployeeList = ({ dummies }) => {
  return (
    <aside
      css={{
        width: "25%",
        backgroundColor: theme.color.primary,
        borderRight: "1px solid lightgrey",
        paddingTop: "3rem"
      }}
    >
      <ul
        css={{
          width: "70%",
          margin: "auto"
        }}
      >
        <NavLink
          css={{
            display: "block",
            marginTop: "0.5rem",
            padding: "1rem"
          }}
          activeStyle={{
            border: `1px solid ${theme.color.highlight}`
          }}
          to="/admin/employees/create"
        >
          Add employee
        </NavLink>
        {dummies.map(dummy => {
          return (
            <NavLink
              css={{
                display: "block",
                marginTop: "0.5rem",
                padding: "1rem"
              }}
              activeStyle={{
                border: `1px solid ${theme.color.highlight}`
              }}
              key={dummy.id}
              to={`/admin/employees/${dummy.id}`}
            >
              <p css={{ fontSize: "1.2rem" }}>{dummy.name}</p>
              <small>{dummy.role}</small>
            </NavLink>
          );
        })}
      </ul>
    </aside>
  );
};

export default EmployeeList;
