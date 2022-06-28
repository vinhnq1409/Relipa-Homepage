import { useMutation } from 'react-query'
import { post, get } from './BaseRequest'

// signin Api
export const signInApi = () => {
  return useMutation((dataForm) => post('login', dataForm))
}
// Logout api
export const logoutApi = () => get(`logout`)

// Change password
export const changePasswordApi = () => {
  return useMutation((dataForm) => post('change-password', dataForm))
}
