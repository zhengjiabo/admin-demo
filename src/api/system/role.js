import request from '@/axios';
import { baseUrl } from '@/config/env';

export const getList = (current, size, params) => {
  return request({
    url: baseUrl + '/blade-system/role/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}
export const grantTree = () => {
  return request({
    url: baseUrl + '/blade-system/menu/grant-tree',
    method: 'get',
  })
}

export const grant = (roleIds, menuIds, dataScopeIds) => {
  return request({
    url: baseUrl + '/blade-system/role/grant',
    method: 'post',
    data: {
      roleIds,
      menuIds,
      dataScopeIds
    }
  })
}

export const remove = (ids) => {
  return request({
    url: baseUrl + '/blade-system/role/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: baseUrl + '/blade-system/role/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: baseUrl + '/blade-system/role/submit',
    method: 'post',
    data: row
  })
}


export const getRole = (roleIds) => {
  return request({
    url: baseUrl + '/blade-system/menu/role-tree-keys',
    method: 'get',
    params: {
      roleIds,
    }
  })
}

export const getRoleTree = (tenantId) => {
  return request({
    url: baseUrl + '/blade-system/role/tree',
    method: 'get',
    params: {
      tenantId,
    }
  })
}
