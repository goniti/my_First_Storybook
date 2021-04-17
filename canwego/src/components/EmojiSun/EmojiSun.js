import React from "react";
import styled from "styled-components";

const EmojiSun = () => (
  <Circle>
    <HorizontalSunBeam />
    <VerticalSunBeam />
    <RightDiagonalSunBeam />
    <LeftDiagonalSunBeam />
  </Circle>
);

export default EmojiSun;

const SunSize = "6rem";
const SunColor = "#5ca8a6";
const BeamThickness = "0.4rem";
const BeamBreadth = "1.2rem";



const Circle = styled.span`
  position: relative;
  height: ${SunSize};
  width: ${SunSize};
  border: solid 0.4rem ${SunColor};
  background-color: ${SunColor};
  border-radius: 50%;
`;

const HorizontalSunBeam = styled.span`
  display: flex;
  position: absolute;
  top: calc(${SunSize} / 2.3);
  left: -1.86rem;
  width: calc(${SunSize} + 3rem);
  &::after {
    content: "";
    width: 1.2rem;
    height: 0.4rem;
    background-color: ${SunColor};
    border-radius: 15px;
    position: absolute;
    right: 0;
  }
  &::before {
    content: "";
    width: 1.2rem;
    height: 0.4rem;
    background-color: ${SunColor};
    border-radius: 15px;
    position: absolute;
  }
`;
const VerticalSunBeam = styled.span`
  display: flex;
  position: absolute;
  top: calc(${SunSize} / 2.3);
  left: -1.8rem;
  width: calc(${SunSize} + 3rem);
  transform: rotateZ(90deg);
  &::after {
    content: "";
    width: 1.2rem;
    height: 0.4rem;
    background-color: ${SunColor};
    border-radius: 15px;
    position: absolute;
    right: 0;
  }
  &::before {
    content: "";
    width: 1.2rem;
    height: 0.4rem;
    background-color: ${SunColor};
    border-radius: 15px;
    position: absolute;
  }
`;
const RightDiagonalSunBeam = styled.span`
  display: flex;
  position: absolute;
  top: calc(${SunSize} / 2.3);
  left: -1.86rem;
  width: calc(${SunSize} + 3rem);
  transform: rotateZ(45deg);
  &::after {
    content: "";
    width: 1.2rem;
    height: 0.4rem;
    background-color: ${SunColor};
    border-radius: 15px;
    position: absolute;
    right: 0;
  }
  &::before {
    content: "";
    width: 1.2rem;
    height: 0.4rem;
    background-color: ${SunColor};
    border-radius: 15px;
    position: absolute;
  }
`;
const LeftDiagonalSunBeam = styled.span`
  display: flex;
  position: absolute;
  top: calc(${SunSize} / 2.3);
  left: -1.86rem;
  width: calc(${SunSize} + 3rem);
  transform: rotateZ(-45deg);
  &::after {
    content: "";
    width: 1.2rem;
    height: 0.4rem;
    background-color: ${SunColor};
    border-radius: 15px;
    position: absolute;
    right: 0;
  }
  &::before {
    content: "";
    width: 1.2rem;
    height: 0.4rem;
    background-color:${SunColor};
    border-radius: 15px;
    position: absolute;
  }
`;
