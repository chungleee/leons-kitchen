import { combineReducers } from "redux";
import authReducer from "./authReducer";
import employeesReducer from "./employeesReducer";
import foodReducer from "./foodReducer";

const rootReducer = combineReducers({
  authState: authReducer,
  employeesState: employeesReducer,
  foodItemsState: foodReducer
});

export default rootReducer;
