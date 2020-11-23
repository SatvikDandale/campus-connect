import { combineReducers } from "redux";
import userReducer from "./userReducer";
import feedReducer from "./feedReducer";
import errorReducer from "./errorReducer";
const rootReducer = combineReducers({
  errorReducer,
  userReducer,
  feedReducer,
});
export default rootReducer;
