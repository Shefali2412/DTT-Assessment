import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: {
    "Access-Key": import.meta.env.VITE_DTT_API_KEY,
  },
});

// unwrap response.data and normalise errors
api.interceptors.response.use(
  (res) => res.data,
  (err) =>
    Promise.reject(
      err?.response?.data ?? { message: err.message || "Unknown API error" },
    ),
);

// CRUD helpers
export const getHouses = () => api.get("/houses");
export const getHouse = (id) => api.get(`/houses/${id}`);
export const createHouse = (payload) => api.post("/houses", payload);
export const updateHouse = (id, payload) => api.put(`/houses/${id}`, payload);
export const deleteHouse = (id) => api.delete(`/houses/${id}`);
