import { combineReducers } from "@reduxjs/toolkit";
import demoSlice from "./slices/demoSlice";

export default combineReducers({
  demo: demoSlice
})