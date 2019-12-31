import { FETCH_EMPLOYEES, CREATE_USER, DELETE_USER } from "../actions/types";

const initialState = {
  employees: []
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: action.payload
      };
    case CREATE_USER:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case DELETE_USER:
      const deletedUser = action.payload;
      const updatedEmployees = state.employees.filter(employee => {
        if (employee._id !== deletedUser._id) {
          return employee;
        }
      });
      return {
        ...state,
        employees: updatedEmployees
      };
    default:
      return state;
  }
};

export default employeesReducer;
