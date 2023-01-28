import request from '@/axios';
import { baseUrl } from '@/config/env';

export const getList = (current, size, params) => {
  return request({
    url: baseUrl + '/blade-system/menu/list',
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
    url: baseUrl + '/blade-system/menu/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: baseUrl + '/blade-system/menu/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: baseUrl + '/blade-system/menu/submit',
    method: 'post',
    data: row
  })
}

export const getMenu = (id) => {
  return request({
    url: baseUrl + '/blade-system/menu/detail',
    method: 'get',
    params: {
      id,
    }
  })
}

export const getLazyMenuList = (parentId, params) => {
  return request({
    url: baseUrl + '/blade-system/menu/lazy-menu-list',
    method: 'get',
    params: {
      ...params,
      parentId
    }
  })
}
