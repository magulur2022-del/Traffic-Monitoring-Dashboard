import axios from "axios";

const API_URL = "http://localhost:8000/api/traffic";

export const getAllTraffic = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const getTrafficById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data.data;
};

export const createTraffic = async (trafficData) => {
  const response = await axios.post(API_URL, trafficData);
  return response.data;
};

export const updateTraffic = async (id, trafficData) => {
  const response = await axios.put(`${API_URL}/${id}`, trafficData);
  return response.data;
};

export const deleteTraffic = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};