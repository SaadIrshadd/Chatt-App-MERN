import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : 
    import.meta.env.VITE_API_URL + "/api",
    withCredentials: true
})

axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("chat-user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});
