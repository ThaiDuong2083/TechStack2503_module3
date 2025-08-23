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
    const res = await axiosInstance.get(`${BASE_URL}/auth/me`);

    return res.data;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};
