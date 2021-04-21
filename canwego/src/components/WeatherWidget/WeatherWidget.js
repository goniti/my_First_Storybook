import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WeatherWidget = ({ weatherData }) => {
  return (
    <WidgetWrapper>
      <WidgetWeatherTopPart>
        <TopItemLeft>
          <TopItemCurrentDate>{weatherData.dt}</TopItemCurrentDate>
          <TopItemIllustration
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
        </TopItemLeft>
        <TopItemRight>
          <TopItemMinDegree>{weatherData.main.temp_min}</TopItemMinDegree>
          <TopItemMaxDegree>{weatherData.main.temp_max}</TopItemMaxDegree>
        </TopItemRight>
      </WidgetWeatherTopPart>
      <WidgetWeatherBottomPart>
        <BottomItem />
        <BottomItemImage />
        <BottomItemText />
      </WidgetWeatherBottomPart>
    </WidgetWrapper>
  );
};

WeatherWidget.propTypes = {
  weatherData: PropTypes.shape({
    base: PropTypes.string.isRequired,
    clouds: PropTypes.shape({
      all: PropTypes.number.isRequired,
    }).isRequired,
    cod: PropTypes.number.isRequired,
    coord: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    }).isRequired,
    dt: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    main: PropTypes.shape({
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      sunrise: PropTypes.number.isRequired,
      sunset: PropTypes.number.isRequired,
      type: PropTypes.number.isRequired,
    }).isRequired,
    timezone: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        main: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    wind: PropTypes.shape({
      deg: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherWidget;

const WidgetWrapper = styled.div``;
const WidgetWeatherTopPart = styled.div`
  display: flex;
  background-color: red;
`;
const TopItemLeft = styled.div``;
const TopItemCurrentDate = styled.p``;
const TopItemIllustration = styled.img``;
const TopItemRight = styled.div``;
const TopItemMinDegree = styled.p``;
const TopItemMaxDegree = styled.p``;

const WidgetWeatherBottomPart = styled.div``;
const BottomItem = styled.div``;
const BottomItemImage = styled.p``;
const BottomItemText = styled.p``;
