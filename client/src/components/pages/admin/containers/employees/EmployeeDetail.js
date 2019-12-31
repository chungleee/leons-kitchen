import React from "react";
import { useDispatch } from "react-redux";
import { handleDeleteEmployee } from "../../../../../redux/actions/employeesActions";

const EmployeeDetail = ({ location, history }) => {
  const { firstName, lastName, role, email, _id } = location.state.employee;
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{`${firstName} ${lastName}`}</h3>
      <p>{email}</p>
      <p>{role}</p>
      <button
        onClick={() => {
          alert("Are you sure you want to delete this employee?");
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
