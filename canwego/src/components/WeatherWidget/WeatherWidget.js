import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WeatherWidget = ({ weatherData }) => {
  console.log(weatherData)
return (
 
  
  <WidgetWrapper>
    <WidgetWeatherTopPart>
      <TopItemLeft>
        <TopItemCurrentDate>{Date.now()}</TopItemCurrentDate>
        <TopItemIllustration src="http://openweathermap.org/img/wn/04d@2x.png" />
      </TopItemLeft>
      <TopItemRight>
        <TopItemMinDegree>temp_min</TopItemMinDegree>
        <TopItemMaxDegree>temp_max</TopItemMaxDegree>
      </TopItemRight>
    </WidgetWeatherTopPart>
    <WidgetWeatherBottomPart>
      <BottomItem />
      <BottomItemImage />
      <BottomItemText />
    </WidgetWeatherBottomPart>
  </WidgetWrapper>
)
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
