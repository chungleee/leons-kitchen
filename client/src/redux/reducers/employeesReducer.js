import { FETCH_EMPLOYEES, CREATE_USER } from "../actions/types";

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
    default:
      return state;
  }
};

export default employeesReducer;
