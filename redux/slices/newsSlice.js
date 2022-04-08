import { createSlice } from '@reduxjs/toolkit'

const newSlice = createSlice({
  name: 'blog',
  initialState: {
    news: {}
  },
  reducers: {
    addNews: (state, action) => {
      state.blog =  action.payload
    },
    resetNews: (state, action) => {
      state.blog =  {}
    }
  }
})
export const { addNews, resetNews } = newSlice.actions
export default newSlice.reducer
