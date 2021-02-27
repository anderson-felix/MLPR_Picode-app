import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://localhost:3333/',
  // withCredentials: true,
});

api.interceptors.response.use(
  (resp) => resp.data,
  (error) => Promise.reject(error)
);
