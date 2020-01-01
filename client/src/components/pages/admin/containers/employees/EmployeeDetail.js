import React from "react";
import { useDispatch } from "react-redux";
import { handleDeleteEmployee } from "../../../../../redux/actions/employeesActions";

const EmployeeDetail = ({ location, history }) => {
  const {
    firstName,
    lastName,
    role,
    email,
    _id,
    pin
  } = location.state.employee;
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Employee Detail</h1>
      <div style={{ margin: "1.5rem 0" }}>
        <label style={{ marginBottom: "0.5rem" }}>Full name:</label>
        <h3>{`${firstName} ${lastName}`}</h3>
      </div>
      <div style={{ margin: "1.5rem 0" }}>
        <label style={{ marginBottom: "0.5rem" }}>Email:</label>
        <p>{email}</p>
      </div>
      <div style={{ margin: "1.5rem 0" }}>
        <label style={{ marginBottom: "0.5rem" }}>Role:</label>
        <p>{role}</p>
      </div>
      <div style={{ margin: "1.5rem 0" }}>
        <label style={{ marginBottom: "0.5rem" }}>PIN:</label>
        <p>{pin}</p>
      </div>
      <button
        onClick={() => {
          alert(
            "Are you sure you want to delete this employee from the system?"
          );
          dispatch(handleDeleteEmployee(_id));
          history.push("/admin/employees");
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default EmployeeDetail;
