import { useMutation } from 'react-query'
import { post, get } from './BaseRequest'

// signin Api
export const signinApi = () => {
  return useMutation((dataForm) => post('login', dataForm))
}
// logout api
export const logoutApi = () => get(`logout`)

//change password
export const changePasswordApi = () => {
  return useMutation((dataForm) => post('change-password', dataForm))
}
