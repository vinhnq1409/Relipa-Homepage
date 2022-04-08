import { combineReducers } from '@reduxjs/toolkit'
import demoSlice from './slices/demoSlice'
import infoUserSlice from './slices/userInfo'
import blogSlice from './slices/blogSlice'
import newsSlice from './slices/newsSlice'

export default combineReducers({
  userInfo: infoUserSlice,
  demo: demoSlice,
  blog: blogSlice,
  new: newsSlice
})
