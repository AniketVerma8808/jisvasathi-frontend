import axios from "axios";
import { store } from "../Redux/Store";
import { logOutUser } from "../Features/Userslice";

// Base URL
const API_URL = "http://localhost:3040/api";

// const API_URL = "https://vivah-sanyog-backend.onrender.com/api";

// Create Axios instance
const apiClient = axios.create({
  baseURL: API_URL,
});

// 🔐 Request Interceptor – Attach token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Handle multipart/form-data separately
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ❌ Response Interceptor – Handle unauthorized (401)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      store.dispatch(logOutUser())
     
      // Optionally show toast or redirect
      // toast.error("Session expired. Please login again.");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default apiClient;
