import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WeatherWidget = () => (
  <WidgetWrapper>
    <WidgetTopPart />
    <WidgetBottomPart />
  </WidgetWrapper>
);

export default WeatherWidget;

const WidgetWrapper = styled.div`
  background-color: red;
`;
const WidgetTopPart = styled.div`
  display: flex;
`;
const CurrentDate = styled.p``;
const WeatherIllustration = styled.span``;
const MinMaxDegree = styled.p``;

const WidgetBottomPart = styled.div``;
const WidgetWeatherItem =  styled.div``;
const WidgetWeatherItemText =  styled.p``;

