import { combineReducers } from '@reduxjs/toolkit'
import infoUserSlice from './slices/userInfo'
import blogSlice from './slices/blogSlice'

export default combineReducers({
  userInfo: infoUserSlice,
  blog: blogSlice,
})
