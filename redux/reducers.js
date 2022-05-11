import { combineReducers } from '@reduxjs/toolkit'
import infoUserSlice from './slices/userInfo'
import blogSlice from './slices/blogSlice'
import tagSlice from './slices/tagSlice'

export default combineReducers({
  userInfo: infoUserSlice,
  blog: blogSlice,
  tag: tagSlice
})
