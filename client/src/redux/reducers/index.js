import { combineReducers } from "redux";
import authReducer from "./authReducer";
import employeesReducer from "./employeesReducer";

const rootReducer = combineReducers({
  authState: authReducer,
  employeesState: employeesReducer
});

export default rootReducer;
