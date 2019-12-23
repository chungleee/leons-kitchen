import React from "react";

const CheckAuth = (Component, rolesArray) => {
  return props => {
    if (rolesArray.includes(props.user.role)) {
      return <Component user={props.user} {...props} />;
    }

    return <h1>You don't have access to this page</h1>;
  };
};

export default CheckAuth;
