import { combineReducers } from "redux";
import notificationReducer from "./notifications";
import usersReducer from "./users";
import authReducer from "./auth";
import adminsReducer from "./admins";
import linktypesReducer from "./linktypes";
import superadminsReducer from "./superadmins";

const reducers = combineReducers({
  auth: authReducer,
  notification: notificationReducer,
  users: usersReducer,
  admins: adminsReducer,
  linktypes: linktypesReducer,
  superadmins: superadminsReducer
});

export default reducers;
