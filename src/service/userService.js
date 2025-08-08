import axiosInstance from '../api/axiosInstance';

const userApi = {
  getProfile: () => axiosInstance.get("/user/profile"),
  updateProfile: (data) => axiosInstance.put("/user/profile", data),
};

export default userApi;
