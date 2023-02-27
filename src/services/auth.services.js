import axios from 'axios';

export const publicAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const privateAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set: token => {
    privateAPI.defaults.headers.Authorization = token;
  },

  reset: () => {
    privateAPI.defaults.headers.Authorization = null;
  },
};
