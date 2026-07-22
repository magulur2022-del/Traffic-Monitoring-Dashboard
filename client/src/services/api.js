import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/traffic",
});

export const getAllTraffic = async () => {
  return await API.get("/");
};

export const getTrafficById = async (id) => {
  return await API.get(`/${id}`);
};

export const createTraffic = async (trafficData) => {
  return await API.post("/", trafficData);
};

export const updateTraffic = async (id, trafficData) => {
  return await API.put(`/${id}`, trafficData);
};

export const deleteTraffic = async (id) => {
  return await API.delete(`/${id}`);
};

export default API;