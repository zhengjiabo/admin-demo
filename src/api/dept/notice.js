import request from '@/axios';
import { baseUrl } from '@/config/env';

export const getList = (current, size, params) => {
  return request({
    url: baseUrl + '/blade-desk/notice/list',
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
    url: baseUrl + '/blade-desk/notice/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: baseUrl + '/blade-desk/notice/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: baseUrl + '/blade-desk/notice/submit',
    method: 'post',
    data: row
  })
}

export const getNotice = (id) => {
  return request({
    url: baseUrl + '/blade-desk/notice/detail',
    method: 'get',
    params: {
      id
    }
  })
}

