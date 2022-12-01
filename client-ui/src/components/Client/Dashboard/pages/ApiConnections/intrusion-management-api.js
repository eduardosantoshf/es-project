import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: process.env.REACT_APP_INTRUSION_MANAGEMENT_API_URL,
});

export default api;