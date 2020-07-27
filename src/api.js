import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "b75144c646de41d39e9cd9c1531c9bb1",
    language: "en-US",
  },
});

api.get("tv/popular");

export default api;
