import axios from "axios";
import { axiosInstance } from "../api/axiosInstance";


const BASE_URL = "https://dummyjson.com";

export const login = async (username, password) => {
  const res = await axios.post(`${BASE_URL}/auth/login`, {
    username,
    password,
    expiresInMins: 30
  },);
  return res.data;
};

export const getUserData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      try {
        // gọi refresh token
        const resAuthToken = await axios.post(`${BASE_URL}/auth/refresh`, {
          refreshToken: localStorage.getItem("refreshToken"),
          expiresInMins: 30,
        });

        const newToken = resAuthToken.data.accessToken;
        localStorage.setItem("token", newToken);

        // gọi lại API /auth/me với token mới
        const resRetry = await axios.get(`${BASE_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        });

        return resRetry.data;
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        return null;
      }
    }

    console.error("Error getting user data:", error);
    return null;
  }
};