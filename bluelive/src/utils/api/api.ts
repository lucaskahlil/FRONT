import axios from "axios";
import { GameResponse } from "../types/game";
import { CreateProfile, DeleteProfile, EditProfile, LoginRequest } from "../types/request";

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

//LOGIN

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

  // PROFILE

  getProfile: async (id: string | null) => {
    try {
      const response = await axios.get("/profile/" + id);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  patchProfile: async (data: EditProfile) => {
    try {
      const response = await axios.patch("/profile/" + data.id, { Title: data.Title, ImageURL: data.ImageURL })
      return response.data;
    } catch (err) {
      alert(err)
    }
  },

  postProfile: async (data: CreateProfile) => {
    try {
      const response = await axios.post("/profile", data)
      return response.data;
    } catch (err) {
      alert(err)
    }
  },

  deleteProfile: async (data: DeleteProfile) => {
    try {
      const response = await axios.delete("/profile/" + data.id)
    } catch (err) {
      alert(err)
    }
  },

  // HOMEPAGE

  getHomepageProfile: async (id: string | undefined) => {
    try {
      const response = await axios.get("/homepage/" + id);
      return response.data
    } catch (err) {
      alert(err)
    }
  },

  //GAME

  postGame: async(data: any) => {
    try {
      const response = await axios.post("/game" , data)
    } catch (err) {
      alert(err)
    }
  },

  patchGame: async(data: Omit<GameResponse, "genres">) => {
    try {
      const response = await axios.patch('/game/' + data.id, {Title: data.Title, CoverImageUrl: data.CoverImageUrl, Description: data.Description, Year: data.Year, ImdbScore: data.ImdbScore, TrailerYouTubeUrl: data.TrailerYouTubeUrl, GameplayYouTubeUrl: data.GameplayYouTubeUrl})
      return response
    } catch (err) {
      alert(err)
    }
  },

  deleteGame: async(data: any) => {
    try {
      const response = await axios.delete('/delete/' + data.id)
    } catch (err) {
      alert(err)
    }
  },

  // GENRES

  getGenre: async () => {
    try {
      const response = await axios.get("/genre")
      return response.data
    } catch (err) {
      alert(err) 
    }
  },

  // GAMES

  getGame: async (id: string | undefined) => {
    try {
      const response = await axios.get("/game/" + id);
      return response.data;
    } catch (err) {
      alert(err)
    }
  }
};
