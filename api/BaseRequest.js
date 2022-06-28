import axios from 'axios'
import getConfig from 'next/config'
import { removeCookie, STORAGEKEY } from '../utils/storage'
const { publicRuntimeConfig } = getConfig()

const getUrlPrefix = () => '/'
const instance = axios.create({
  baseURL: publicRuntimeConfig.apiUrl
})

export const setAuthHeader = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const get = async(url, params = {}) => {
  try {
    const config = { params: params }
    const response = await instance.get(getUrlPrefix() + url, config)
    return _responseHandler(response)
  } catch (error) {
    return _errorHandler(error)
  }
}

export const put = async(url, data = {}) => {
  try {
    let response = {}
    if (data.toLocaleString() === '[object FormData]') {
      response = await instance.put(getUrlPrefix() + url, data)
    } else {
      response = await instance.put(getUrlPrefix() + url, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}

export const post = async(url, data = {}) => {
  try {
    const response = await instance.post(getUrlPrefix() + url, data)
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}

export const del = async(url, data = {}) => {
  try {
    const response = await instance.delete(getUrlPrefix() + url, { data })
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}

const _responseHandler = (response, url) => {
  const { data } = response
  return data
}

const _errorHandler = (err) => {
  if (err.response && err.response.status === 401) {
    removeCookie(STORAGEKEY.ACCESS_TOKEN)
    // window.location.href = '/admin'
  }
  throw err
}

export const patch = async(url, data = {}) => {
  try {
    let response = {}
    if (data.toLocaleString() === '[object FormData]') {
      response = await instance.patch(getUrlPrefix() + url, data)
    } else {
      response = await instance.patch(getUrlPrefix() + url, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}
