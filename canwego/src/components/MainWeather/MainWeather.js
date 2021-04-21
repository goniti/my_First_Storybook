import React, { useState, useEffect } from "react";
import WeatherOverview from "../WeatherOverview/WeatherOverview";
import WeatherWidget from "../WeatherWidget/WeatherWidget";

const MainWeather = () => {
  console.log(process.env.OPEN_WEATHER_API_KEY);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=issoudun&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
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
  }, []);

  return (
    <main>
      <WeatherOverview degree={27} />
      <WeatherWidget weatherData={data} />
    </main>
  );
};

export default MainWeather;
