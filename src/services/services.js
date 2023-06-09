import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};