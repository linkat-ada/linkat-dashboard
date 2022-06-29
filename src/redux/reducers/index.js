import { combineReducers } from "redux";
import userReducer from "./users";
import notificationReducer from "./notifications";

const reducers = combineReducers({
  auth: userReducer,
  notification: notificationReducer,
});

export default reducers;
