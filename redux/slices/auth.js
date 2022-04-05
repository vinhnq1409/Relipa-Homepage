import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth } from "../../api/authApi";

export const signin = createAsyncThunk("auth/signin", async (dataForm) => {
  const { data } = await useAuth(dataForm);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    successSignin: false,
  },

  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.loading = false;
      state.successSignin = true;
    });
    builder.addCase(signin.rejected, (state) => {
      state.messages = "Signin fail";
    });
  },
});

export default authSlice.reducer;
