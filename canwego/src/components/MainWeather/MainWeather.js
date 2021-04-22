import React, { useState, useEffect } from "react";
import WeatherOverview from "../WeatherOverview/WeatherOverview";
import WeatherWidget from "../WeatherWidget/WeatherWidget";

const MainWeather = ({ cityName }) => {
  const [data, setData] = useState([]);
  //const [error, setError] = useState([]);
  //console.log("errorData", error);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(true);
      })
      //.catch((error) => setError(error));
  }, [cityName]);

  return (
    <>
      {loading && (
        <main>
          <WeatherOverview degree={parseInt(data.main.temp)} />
          <WeatherWidget weatherData={data} />
        </main>
      )}
    </>
  );
};

export default MainWeather;
