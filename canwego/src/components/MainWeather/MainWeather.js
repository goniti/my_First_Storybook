import React, { useState, useEffect } from "react";
import WeatherOverview from "../WeatherOverview/WeatherOverview";
import WeatherWidget from "../WeatherWidget/WeatherWidget";

const MainWeather = ({cityName}) => {
  const [data, setData] = useState([]);
  const isLoading = data.length !== 0;
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.error(error);
        }
      );
  }, [cityName]);

  return (
    <>
      {isLoading && (
        <main>
          <WeatherOverview degree={parseInt(data.main.temp)} />
          <WeatherWidget weatherData={data} />
        </main>
      )}
    </>
  );
};

export default MainWeather;
