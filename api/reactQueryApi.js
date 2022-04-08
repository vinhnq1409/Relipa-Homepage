import { useMutation } from 'react-query'
import { post, get } from './BaseRequest'

// signin Api
export const signinApi = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  // return useMutation((dataForm) => post('oauth/token', dataForm))
  return useMutation((dataForm) => post('user/login', dataForm))
=======
  return useMutation((dataForm) => post('oauth/token', dataForm))
>>>>>>> 527914b (update api server)
=======
  return useMutation((dataForm) => post('user/login', dataForm))
>>>>>>> 2a3d1bc (add get api)
}
// logout api
export const logoutApi = () => get(`user/logout`)
