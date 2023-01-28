import request from '@/axios';
import { baseUrl } from '@/config/env';

export const getList = (current, size, params) => {
  return request({
    url: baseUrl + '/blade-report/report/rest/list',
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
    url: baseUrl + '/blade-report/report/rest/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}
