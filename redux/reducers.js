import { combineReducers } from '@reduxjs/toolkit'
import demoSlice from './slices/demoSlice'
import infoUserSlice from './slices/userInfo'

export default combineReducers({
  userInfo: infoUserSlice,
  demo: demoSlice,
})
