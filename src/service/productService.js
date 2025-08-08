import axiosInstance from '../api/axiosInstance';

export const getPageProduct = async (limit, skip, q) => {
  const res = await axiosInstance.get(`/products/search`, {
    params: { q, limit, skip }
  });
  return res.data;
};

export const getDetailProduct = async (id) => {
  const res = await axiosInstance.get(`/products/${id}`);
  return res.data;
};
