import { combineReducers } from "@reduxjs/toolkit";
import demoSlice from "./slices/demoSlice";
import userInfo from "./slices/userInfo";

export default combineReducers({
  userInfo: userInfo,
  demo: demoSlice,
});
