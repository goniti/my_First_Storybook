import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Pictogram = ({iconName}) => {
  return (
    <IconsCircle>
      <Icon src={iconName}></Icon>
    </IconsCircle>
  );
};

Pictogram.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Pictogram;

const iconSize = "2.5em";
const iconBackgroundSize = "5em";
const iconBackgroundColor = "#182242";

const IconsCircle = styled.i`
  display: flex;
  justify-content:center;
  align-items:center;
  border-radius: 50%;
  width: ${iconBackgroundSize};
  height: ${iconBackgroundSize};
  background-color: ${iconBackgroundColor};
`;

const Icon = styled.img`
  height: ${iconSize};
  width: ${iconSize};
`;
