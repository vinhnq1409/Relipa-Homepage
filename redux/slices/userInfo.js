import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get } from '../../api/BaseRequest'

export const getInfoUser = createAsyncThunk('infoUser/getInfoUser', async () => {
  const data = await get('info')
  return data
})

const infoUserSlice = createSlice({
  name: 'infoUser',
  initialState: {
    loading: false,
    infoUser: {}
  },
  extraReducers: (builder) => {
    builder.addCase(getInfoUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getInfoUser.fulfilled, (state, action) => {
      state.loading = false
      state.infoUser = action.payload
    })
    builder.addCase(getInfoUser.rejected, (state) => {
      state.messages = 'Get infoUser fail'
      state.loading = false
    })
  }
})

export default infoUserSlice.reducer
