import { createSlice } from '@reduxjs/toolkit'

const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    tag: null
  },
  reducers: {
    addTag: (state, action) => {
      state.tag =  action.payload
    },
    resetTag: (state, action) => {
      state.tag =  null
    }
  }
})
export const { addTag, resetTag } = tagSlice.actions
export default tagSlice.reducer
