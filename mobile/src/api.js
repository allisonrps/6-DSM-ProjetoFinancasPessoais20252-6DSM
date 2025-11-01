import axios from "axios";

const api = axios.create({
  baseURL: "http://172.20.204.20:8080/api",
});

export default api;
