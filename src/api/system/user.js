import request from '@/axios';
import { baseUrl } from '@/config/env';

export const getList = (current, size, params) => {
  return request({
    url: baseUrl + '/blade-user/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}
export const remove = (ids) => {
  return request({
    url: baseUrl + '/blade-user/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: baseUrl + '/blade-user/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: baseUrl + '/blade-user/update',
    method: 'post',
    data: row
  })
}

export const grant = (userIds, roleIds) => {
  return request({
    url: baseUrl + '/blade-user/grant',
    method: 'post',
    params: {
      userIds,
      roleIds,
    }
  })
}

export const getUser = (id) => {
  return request({
    url: baseUrl + '/blade-user/detail',
    method: 'get',
    params: {
      id,
    }
  })
}

export const getUserInfo = () => {
  return request({
    url: baseUrl + '/blade-user/info',
    method: 'get',
  })
}

export const resetPassword = (userIds) => {
  return request({
    url: baseUrl + '/blade-user/reset-password',
    method: 'post',
    params: {
      userIds,
    }
  })
}

export const updatePassword = (oldPassword, newPassword, newPassword1) => {
  return request({
    url: baseUrl + '/blade-user/update-password',
    method: 'post',
    params: {
      oldPassword,
      newPassword,
      newPassword1,
    }
  })
}

