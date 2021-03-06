/**
*频道相关接口封装模块
*/
import request from '@/utils/request'

export const getUserChannels = () => {
  return request({
    methods: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
