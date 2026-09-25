import { useState } from "react";
import { getWeather, getWeatherByLocation } from "./services/weatherApi";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city.trim());
      setWeather(data);
    } catch (error) {
      setWeather(null);

      if (error.response?.status === 404) {
        setError("City not found");
      } else {
        setError("Unable to fetch weather data");
      }
    } finally {
      setLoading(false);
    }
  };
  const handleLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const data = await getWeatherByLocation(latitude, longitude);

          setWeather(data);
        } catch (error) {
          setWeather(null);
          setError("Unable to fetch your location weather");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        setError("Location permission was denied");
      },
    );
  };

  return (
    <main className="app">
      <div className="container">
        <header className="header">
          <div>
            <p className="eyebrow">WEATHER APP</p>
            <h1>WeatherVerse</h1>
            <p className="subtitle">
              Explore the weather, anywhere in the world.
            </p>
          </div>
        </header>

        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
          <button
            type="button"
            className="location-button"
            onClick={handleLocation}
            disabled={loading}
          >
            📍 Use My Location
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        {weather && (
          <section className="weather-card">
            <div className="location">
              <p className="label">CURRENT WEATHER</p>
              <h2>
                {weather.city}, {weather.country}
              </h2>
              <p className="description">{weather.description}</p>
            </div>

            <div className="temperature">
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.description}
              />

              <span>{Math.round(weather.temperature)}°</span>
            </div>

            <div className="weather-details">
              <div className="detail">
                <span>Feels Like</span>
                <strong>{Math.round(weather.feelsLike)}°C</strong>
              </div>

              <div className="detail">
                <span>Humidity</span>
                <strong>{weather.humidity}%</strong>
              </div>

              <div className="detail">
                <span>Wind Speed</span>
                <strong>{weather.windSpeed} m/s</strong>
              </div>
            </div>
          </section>
        )}

        {!weather && !loading && !error && (
          <div className="empty-state">
            <div className="empty-icon">🌤️</div>
            <h2>Search for a city</h2>
            <p>
              Enter a city name above to see the latest weather information.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
