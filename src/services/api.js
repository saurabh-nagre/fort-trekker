import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.REACT_APP_URI,
});

const apiCall = async (config) => {
  const authToken = await localStorage.getItem('AUTH_TOKEN_KEY');

  if (config.headers) {
    config.headers.Authorization = authToken;
  } else {
    config.headers = {
      Authorization: authToken,
    };
  }
  return await axiosInstance.request(config);
};

export default apiCall;
