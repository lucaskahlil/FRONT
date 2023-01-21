import axios from "axios";
import { async } from "q";
import { LoginRequest } from "../types/request";

axios.defaults.baseURL = "https://xbox-live-api.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
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
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.status == 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
  }
);

export const api = {
  login: async ({ Email, Password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth", { Email, Password });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  getProfile: async () => {
    try {
      const response = await axios.get("/profiles");
      return response.data;
    } catch (err) {
      alert(err);
    }
  },
};
