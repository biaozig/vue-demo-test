// 存放登录相关接口
import request from '@/utils/request'

// 登录
export const login_in = async (params) => {
  return new Promise((resolve, reject) => {
    request.post({ ...params }).then((data) => {
      resolve(data)
    })
  })
}

// 登出
export const login_out = async (params) => {
  return new Promise((resolve, reject) => {
    request.post({ ...params }).then((data) => {
      resolve(data)
    })
  })
}