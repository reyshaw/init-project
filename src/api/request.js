import axios from 'axios'
import store from '@/store'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 配置 环境的接口地址
const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://xxx.com' : ''
// 创建
const request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // 超时时间
  // withCredentials: true,
  transformRequest: [function(data) {
    return data
  }]
})

// 拦截请求
request.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
}, error => {
  Promise.reject(error)
})

// 拦截响应
request.interceptors.response.use(res => { // 200开头的
  const { data } = res
  const { code } = data
  switch (code / 1) {
    case 400: // 参数错误
      return Promise.resolve({
        data: null,
        msg: res.data.msg
      })
    case 500: // 服务器内部错误
      break
    default:
      return {
        ...data.data
      }
  }
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400: error.message = '请求错误'; break
      case 401: error.message = '未授权，请登录'; break
      case 403: error.message = '拒绝访问'; break
      case 404: error.message = `请求地址不存在: ${error.response.config.url}`; break
      case 408: error.message = '请求超时'; break
      case 500: error.message = '服务器内部错误'; break
      case 501: error.message = '服务未实现'; break
      case 502: error.message = '网关错误'; break
      case 503: error.message = '服务不可用'; break
      case 504: error.message = '网关超时'; break
      case 505: error.message = 'HTTP版本不受支持'; break
      default: error.message = '未捕获到的状态码'; break
    }
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    data: null,
    msg: error
  })
}
)
export default request
