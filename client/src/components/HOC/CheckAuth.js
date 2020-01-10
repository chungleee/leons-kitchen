import React from "react";

const CheckAuth = (Component, rolesArray) => {
  return ({ user, ...props }) => {
    if (user && rolesArray.includes(user.role)) {
      return <Component user={user} {...props} />;
    }

    return <h1>You don't have access to this page</h1>;
  };
};

export default CheckAuth;
