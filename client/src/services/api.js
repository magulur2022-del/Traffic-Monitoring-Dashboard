const BASE_URL = "https://dummyjson.com";

export const getVehicles = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch vehicles");
  }

  return response.json();
};