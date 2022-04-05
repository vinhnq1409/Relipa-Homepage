import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../api/BaseRequest";

const initialState = {
  user: {},
  message: "",
  loading: true,
  isAuthenticated: false,
};

export const getUserInfo = createAsyncThunk("userInfo", async () => {
  return await get("leave_quotas");
});
const userInfo = createSlice({
  name: "userInfo",
  initialState,
  extraReducers: {
    [getUserInfo.pending]: (state, action) => {
      state.message = "loading...";
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.message =
        "Get user info fail ! Please try again. If still fail, please contact to admin@demo.com";
    },
  },
  reducers: {
    resetUserInfo: (state, { payload }) => {
      return initialState;
    },
  },
});
const { reducer, actions } = userInfo;
export const { resetUserInfo } = actions;

export default reducer;
