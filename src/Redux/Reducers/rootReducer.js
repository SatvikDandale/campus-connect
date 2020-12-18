import { combineReducers } from "redux";
import userReducer from "./userReducer";
import feedReducer from "./feedReducer";
import errorReducer from "./errorReducer";
import chatReducer from "./chatReducer";
const rootReducer = combineReducers({
  errorReducer,
  userReducer,
  feedReducer,
  chatReducer
});
export default rootReducer;
