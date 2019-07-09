/**
*用户接口封装模块
*/
import requset from '@/utils/requset'

export const login = ({ mobile, code }) => {
  return requset({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
