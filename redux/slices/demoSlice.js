import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getDemo = createAsyncThunk('demo', async () => {
  const data = await axios.get('https://621d9ac3806a09850a5d9fff.mockapi.io/leave_quotas')
  return data
})

const initialState = {
  demo:[]
}

const demoSlice = createSlice({
  name:'demo',
  initialState,
  reducers: {
    resetToInitState: () =>initialState
  },
  extraReducers:{
    [getDemo.fulfilled] : (state, action) => {
      state.demo = action.payload.data
    }
  }
})

export const {resetToInitState} = demoSlice.actions

export default demoSlice.reducer