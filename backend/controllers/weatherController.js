const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const { city, lat, lon } = req.query;

    let params = {
      appid: process.env.OPENWEATHER_API_KEY,
      units: "metric",
    };

    if (lat && lon) {
      params.lat = lat;
      params.lon = lon;
    } else if (city) {
      params.q = city;
    } else {
      return res.status(400).json({
        message: "Please provide a city or location coordinates",
      });
    }

    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params,
      },
    );

    const weatherData = response.data;

    res.status(200).json({
      city: weatherData.name,
      country: weatherData.sys.country,
      temperature: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
    });
  } catch (error) {
    console.error("Weather API error:", error.response?.data || error.message);

    if (error.response?.status === 404) {
      return res.status(404).json({
        message: "Location not found",
      });
    }

    if (error.response?.status === 401) {
      return res.status(401).json({
        message: "Invalid or inactive OpenWeather API key",
      });
    }

    res.status(500).json({
      message: "Unable to fetch weather data",
    });
  }
};

module.exports = {
  getWeather,
};
