import Mock from 'mockjs'
const API_VERSION = 'v0.0.1'
// 登录
Mock.mock(`/${API_VERSION}/auth/login`, 'post', (user) => {
  return {
    code: 200,
    data: {
      userName: user.username,
      token: 'xasdfasdfasdfasdfasdfd'
    }
  }
})

// 获取首页配置
Mock.mock(`/${API_VERSION}/settings`, 'get', params => {
  return {
    code: 200,
    data: {
      name: 'settings',
      api_addr: `/${API_VERSION}/settings`,
      image_path: 'http://localhost:9090',
      params
    }
  }
})
