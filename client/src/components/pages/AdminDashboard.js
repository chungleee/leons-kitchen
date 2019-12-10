import React from "react";
import CheckAuth from "../HOC/CheckAuth";

const AdminDashboard = props => {
  return <div>this is the admin dashboard - only for admins</div>;
};

export default CheckAuth(AdminDashboard, ["admin"]);
