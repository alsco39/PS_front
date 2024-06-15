import axios, { AxiosInstance } from "axios";
import { AUTH_URL } from "../../constants/config";
import { getCookie } from "../cookie";

export const AuthInstance: AxiosInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 10000,
});

AuthInstance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const DefaultInstance: AxiosInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 10000,
});
