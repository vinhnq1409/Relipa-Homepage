import { useMutation } from 'react-query'
import { post } from './BaseRequest'

export const signinApi = () => {
  return useMutation((dataForm) => post('user/login', dataForm))
}
