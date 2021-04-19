import React from "react";
import WeatherOverview from "../WeatherOverview/WeatherOverview";
import WeatherWidget from "../WeatherWidget/WeatherWidget";

const MainWeather = () => (
  <main>
    <WeatherOverview degree={27} />
    <WeatherWidget />
  </main>
);

export default MainWeather;
