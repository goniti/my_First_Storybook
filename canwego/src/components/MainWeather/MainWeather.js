import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainWeather = ({ degree }) => <Weather>{degree}°</Weather>;

MainWeather.propTypes = {
  degree: PropTypes.number.isRequired,
};
MainWeather.defaultProps = {
  degree: 0,
};
export default MainWeather;

const Weather = styled.p`
  font-weight: 300;
  font-size: 6rem;
  position: absolute;
  bottom: -8rem;
  color: #5e5c5a;
  margin-left: 2rem;
`;
