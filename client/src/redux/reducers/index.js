import { combineReducers } from "redux";
import authReducer from "./authReducer";
import employeesReducer from "./employeesReducer";
import foodReducer from "./foodReducer";
import paymentReducer from "./paymentReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  authState: authReducer,
  employeesState: employeesReducer,
  foodItemsState: foodReducer,
  paymentState: paymentReducer,
  orderState: orderReducer
});

export default rootReducer;
