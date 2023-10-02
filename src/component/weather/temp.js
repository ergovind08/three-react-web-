import React, { useState, useEffect } from "react";
import "./style.css";

const Temp = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchValue, setSearchValue] = useState("pune");
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=d5aaf45c67031faa63af9357e29d7712`;
      const res = await fetch(url);
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to convert temperature from Kelvin to Celsius
  const kelvinToCelsius = (temp) => {
    return (temp - 273.15).toFixed(1);
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search....."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      <article className="widget">
        <div className="weatherIcon">
          {weatherData && weatherData.weather && weatherData.weather[0] && (
            <i className={`wi wi-owm-${weatherData.weather[0].id}`}></i>
          )}
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            {weatherData && weatherData.main && (
              <span>{kelvinToCelsius(weatherData.main.temp)}°C</span>
            )}
          </div>
          <div className="description">
            {weatherData && weatherData.weather && weatherData.weather[0] && (
              <>
                <div className="weatherCondition">
                  {weatherData.weather[0].main}
                </div>
                <div className="place">
                  {weatherData.name}, {weatherData.sys.country}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="date">
          {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
        </div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 <br /> Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                14:19 <br /> Rain
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                14:19 <br /> Humidity
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                14:19 <br /> Wind
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Temp;
