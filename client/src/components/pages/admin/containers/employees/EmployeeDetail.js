import React from "react";

const EmployeeDetail = ({ location }) => {
  return <div>{JSON.stringify(location.state)}</div>;
};

export default EmployeeDetail;
