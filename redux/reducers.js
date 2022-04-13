import { combineReducers } from '@reduxjs/toolkit'
import infoUserSlice from './slices/userInfo'
import blogSlice from './slices/blogSlice'
import newsSlice from './slices/newsSlice'

export default combineReducers({
  userInfo: infoUserSlice,
  blog: blogSlice,
  new: newsSlice
})
