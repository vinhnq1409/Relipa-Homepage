import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blog: {}
  },
  reducers: {
    addBlog: (state, action) => {
      state.blog =  action.payload
    },
    resetBlog: (state, action) => {
      state.blog =  {}
    }
  }
})
export const { addBlog, resetBlog } = blogSlice.actions
export default blogSlice.reducer
