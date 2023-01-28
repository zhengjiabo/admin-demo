import request from '@/axios';
import { baseUrl } from '@/config/env';

export const getList = (current, size, params) => {
  return request({
    url: baseUrl + '/blade-system/dict/list',
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
    url: baseUrl + '/blade-system/dict/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: baseUrl + '/blade-system/dict/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: baseUrl + '/blade-system/dict/submit',
    method: 'post',
    data: row
  })
}


export const getDict = (id) => {
  return request({
    url: baseUrl + '/blade-system/dict/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
export const getDictTree = () => {
  return request({
    url: baseUrl + '/blade-system/dict/tree?code=DICT',
    method: 'get'
  })
}
