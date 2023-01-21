import axios from "axios";
import { LoginRequest } from "../types/request";

axios.defaults.baseURL = "https://xbox-live-api.onrender.com"
axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers = {
        Authorization: "Bearer " + token,
      };
    }
    return config;
  }, 
  function (error) {
    return Promise.reject(error);
  }
)

export const api = {
  login: async ({ Email, Password }: LoginRequest) => {
    try {
      const response = await axios.post('/auth', { Email, Password })
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },
};
