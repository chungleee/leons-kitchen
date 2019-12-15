import React from "react";
import CheckAuth from "../../HOC/CheckAuth";

const OrderMenu = props => {
  console.log("props from order menu comp", props);
  return (
    <div>
      this is the order menu where user orders food - for staffs and (future
      users)
    </div>
  );
};

export default CheckAuth(OrderMenu, ["admin", "manager", "staff"]);
