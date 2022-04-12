import { useMutation } from 'react-query'
import { post, get } from './BaseRequest'

// signin Api
export const signinApi = () => {
  // return useMutation((dataForm) => post('oauth/token', dataForm))
  return useMutation((dataForm) => post('user/login', dataForm))
}
// logout api
export const logoutApi = () => get(`user/logout`)
