import axios from "../api/axiosInstance";


const BASE_URL = "https://dummyjson.com";

export const login = async (username, password) => {
  const res = await axios.post(`${BASE_URL}/auth/login`, {
    username,
    password,
    expiresInMins: 30
  },);
  localStorage.setItem("token", res.data.accessToken);
  localStorage.setItem("refreshToken", res.data.refreshToken)
  return res.data;
};

export const getUserData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/auth/me`);

    return res.data;
  } catch {
    return null
  }
};
