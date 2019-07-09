import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.course.itcast.cn'
})
// 拦截器，干预进展，选择符合要求的某一些东西
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default request
