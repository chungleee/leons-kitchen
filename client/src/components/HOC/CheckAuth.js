import React from "react";

const CheckAuth = (Component, rolesArray) => {
  return ({ user }) => {
    if (rolesArray.includes(user.role)) {
      return <Component />;
    }

    return <h1>You don't have access to this page</h1>;
  };
};

export default CheckAuth;
