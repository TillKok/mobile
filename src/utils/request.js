import axios from 'axios'
import store from '@/store'

const request = axios.create({
  // baseURL: 'http://toutiao.course.itcast.cn'
  baseURL: 'http://ttapi.research.itcast.cn/'
})
// 拦截器，干预进展，选择符合要求的某一些东西
request.interceptors.request.use(function (config) {
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
request.interceptors.response.use(function (response) {
  return response.data.data || response.data
}, function (error) {
  return Promise.reject(error)
})

export default request
