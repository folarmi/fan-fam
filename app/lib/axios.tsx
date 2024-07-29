import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    try {
      // const token = sessionStorage.getItem("token");
      const token = localStorage.getItem("auth-token");
      if (token) {
        const newConfig = { ...config };
        newConfig.headers.Authorization = `Bearer ${token}`;
        return newConfig;
      }
      return config;
    } catch (error) {
      return config;
    }
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    if (error?.response?.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      console.log("Unauthorized, logging out...");
      localStorage.removeItem("token");
      // window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default api;
