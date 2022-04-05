import { combineReducers } from "@reduxjs/toolkit";
import demoSlice from "./slices/demoSlice";
import userInfo from "./slices/userInfo";
import authSlice from "./slices/auth"

export default combineReducers({
  userInfo: userInfo,
  demo: demoSlice,
  auth:authSlice,
});
