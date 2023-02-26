import axios from 'axios';

export const publicAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
