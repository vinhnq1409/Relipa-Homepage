import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../api/BaseRequest";

export const getDemo = createAsyncThunk("demo", async () => {
  const data = await get("leave_quotas");
  return data;
});

const initialState = {
  demo: [],
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    resetToInitState: () => initialState,
  },
  extraReducers: {
    [getDemo.fulfilled]: (state, action) => {
      state.demo = action.payload;
    },
  },
});

export const { resetToInitState } = demoSlice.actions;

export default demoSlice.reducer;
