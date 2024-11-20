import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || "http://server:8080/api",
});

export default axiosInstance;
