import axios from 'axios';
import apiConfig from './apiConfig';

let PUBLIC_ROUTE = '/iptna/v1';
let PUBLIC_URL = apiConfig.BASE_URL + PUBLIC_ROUTE;

//Public URL
export const publicAxiosInstance = axios.create({
  baseURL: PUBLIC_URL,
});

publicAxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);