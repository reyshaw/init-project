import request from '../request'

/**
 * 登录接口
 * @param user // {username: '*', password: '*', verifyCode: '*'}
 * @returns {Promise<Promise>}
 */
const API_VERSION = 'v0.0.1'
export function getSettings(params = {}) {
  return new Promise(resolve => {
    request({
      url: `/${API_VERSION}/settings`,
      method: 'GET',
      params
    }).then(res => {
      resolve(res)
    }).catch(e => {
      console.log(e)
    })
  })
}
export function loginService(user) {
  return new Promise(resolve => {
    request({
      url: `/${API_VERSION}/auth/login`,
      method: 'POST',
      data: user
    }).then(res => {
      resolve(res)
    }).catch(e => {
      console.log(e)
    })
  })
}
