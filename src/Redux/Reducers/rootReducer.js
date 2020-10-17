import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
const rootReducer = combineReducers({
  errorReducer,
  userReducer,
});
export default rootReducer;
