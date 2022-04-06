import { post } from './BaseRequest'
import { setCookie, STORAGEKEY } from '../utils/storage/index'

export const useAuth = async ({ email, password }) => {
  const { data } = await post('user/login', {
    email,
    password,
  })
  if (data) {
    setCookie(STORAGEKEY.ACCESS_TOKEN, data.access_token)
  }
  return !!data
}
