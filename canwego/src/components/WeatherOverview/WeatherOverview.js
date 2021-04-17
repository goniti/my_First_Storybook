import React from "react";
import styled from "styled-components";
import EmojiSun from "../EmojiSun/EmojiSun";
import MainWeather from "../MainWeather/MainWeather";

const WeatherOverview = () => {
  return (
    <Overview>
      <EmojiSun />
      <MainWeather degree={27} />
    </Overview>
  );
};

export default WeatherOverview;

const Overview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 15rem;
`;
