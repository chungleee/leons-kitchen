import React from "react";

const CheckAuth = (WrappedComponent, rolesArray) => {
  const WithAuth = ({ user }) => {
    if (rolesArray.includes(user.role)) {
      return <WrappedComponent />;
    }

    return <h1>You don't have access to this page</h1>;
  };

  return WithAuth;
};

export default CheckAuth;
