import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/weather`;

export const getWeather = async (city) => {
  const response = await axios.get(API_URL, {
    params: {
      city,
    },
  });

  return response.data;
};

export const getWeatherByLocation = async (lat, lon) => {
  const response = await axios.get(API_URL, {
    params: {
      lat,
      lon,
    },
  });

  return response.data;
};
