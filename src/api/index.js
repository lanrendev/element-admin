import axios from 'axios'

const base = 'http://apiman.lrts.me/mock/312'

export const getUserList = params => {
  return axios.get(`${base}/user/list`, { params: params })
}

export const removeUser = params => {
  return axios.get(`${base}/user/remove`, { params: params })
}

export const batchRemoveUser = params => {
  return axios.get(`${base}/user/batchremove`, { params: params })
}

export const editUser = params => {
  return axios.get(`${base}/user/edit`, { params: params })
}

export const addUser = params => {
  return axios.get(`${base}/user/add`, { params: params })
}
