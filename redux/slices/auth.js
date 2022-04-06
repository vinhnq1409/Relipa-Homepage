import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post, get } from '../../api/BaseRequest'
import { setCookie, STORAGEKEY } from '../../utils/storage/index'

export const signin = createAsyncThunk('auth/signin', async (dataForm) => {
  const data = await post('user/login', dataForm)
  if (data) {
    setCookie(STORAGEKEY.ACCESS_TOKEN, data.access_token)
  }
  return data
})

export const logout = createAsyncThunk('auth/logout', async () => {
  const data = await get('user/logout')
  if (data) {
    removeCookie(STORAGEKEY.ACCESS_TOKEN)
  }
  return data
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    success: false,
  },

  extraReducers: (builder) => {
    //SignIn
    builder.addCase(signin.pending, (state) => {
      state.loading = true
    })
    builder.addCase(signin.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
    })
    builder.addCase(signin.rejected, (state) => {
      state.messages = 'Signin fail'
    })

    //Logout
    builder.addCase(logout.pending, (state) => {
      state.loading = true
    })
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = false
      state.success = false
    })
    builder.addCase(logout.rejected, (state) => {
      state.messages = 'Logout fail'
    })
  },
})

export default authSlice.reducer
