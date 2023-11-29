import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export async function makeRequest(url, options) {
  try {
    const res = await api(url, options);
    return res.data;
  } catch (error) {
    console.log(error, "eror");
    return await Promise.reject(error?.response?.data.message);
  }
}
