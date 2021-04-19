import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EmojiSun from "../EmojiSun/EmojiSun";

const WeatherOverview = ({ degree }) => {
  return (
    <Overview>
      <EmojiSun />
      <Weather>{degree}°</Weather>
    </Overview>
  );
};

WeatherOverview.propTypes = {
  degree: PropTypes.number.isRequired,
};
WeatherOverview.defaultProps = {
  degree: 0,
};

export default WeatherOverview;

const Overview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 15rem;
`;

const Weather = styled.p`
  font-weight: 300;
  font-size: 6rem;
  position: absolute;
  bottom: -8rem;
  color: #5e5c5a;
  margin-left: 2rem;
`;
