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
const SunColor = "#c5e1e2";
const BeamThickness = "0.6rem";
const BeamBreadth = "1.5rem";
const BeamPositionY = "2.5";
const BeamPositionX = "-2.5rem";
const BeamGutter = ".5rem";
const BeamRounded = ".5rem"
const SunBeam = `${SunSize} + ${BeamBreadth} * 2 + ${BeamGutter} * 2`;

const Circle = styled.span`
  position: relative;
  height: ${SunSize};
  width: ${SunSize};
  border: solid ${BeamThickness} ${SunColor};
  background-color: ${SunColor};
  border-radius: 50%;
`;

const HorizontalSunBeam = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: calc(${SunSize} / ${BeamPositionY});
  left: ${BeamPositionX};
  width: calc(${SunBeam});
  &::after {
    content: "";
    width: ${BeamBreadth};
    height: ${BeamThickness};
    background-color: ${SunColor};
    border-radius: ${BeamRounded};
    position: absolute;
    right: 0;
  }
  &::before {
    content: "";
    width: ${BeamBreadth};
    height: ${BeamThickness};
    background-color: ${SunColor};
    border-radius: ${BeamRounded};
    position: absolute;
  }
`;
const VerticalSunBeam = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: calc(${SunSize} / ${BeamPositionY});
  left: ${BeamPositionX};
  width: calc(${SunBeam});
  transform: rotateZ(90deg);
  &::after {
    content: "";
    width: ${BeamBreadth};
    height: ${BeamThickness};
    background-color: ${SunColor};
    border-radius: ${BeamRounded};
    position: absolute;
    right: 0;
  }
  &::before {
    content: "";
    width: ${BeamBreadth};
    height: ${BeamThickness};
    background-color: ${SunColor};
    border-radius: ${BeamRounded};
    position: absolute;
  }
`;
const RightDiagonalSunBeam = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: calc(${SunSize} / ${BeamPositionY});
  left: ${BeamPositionX};
  width: calc(${SunBeam});
  transform: rotateZ(45deg);
  &::after {
    content: "";
    width: ${BeamBreadth};
    height: ${BeamThickness};
    background-color: ${SunColor};
    border-radius: ${BeamRounded};
    position: absolute;
    right: 0;
  }
  &::before {
    content: "";
    width: ${BeamBreadth};
    height: ${BeamThickness};
    background-color: ${SunColor};
    border-radius: ${BeamRounded};
    position: absolute;
  }
`;
const LeftDiagonalSunBeam = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: calc(${SunSize} / ${BeamPositionY});
  left: ${BeamPositionX};
  width: calc(${SunBeam});
  transform: rotateZ(-45deg);
  &::after {
    content: "";
    width: ${BeamBreadth};
    height: ${BeamThickness};
    background-color: ${SunColor};
    border-radius: ${BeamRounded};
    position: absolute;
    right: 0;
  }
  &::before {
    content: "";
    width: ${BeamBreadth};
    height: ${BeamThickness};
    background-color: ${SunColor};
    border-radius: ${BeamRounded};
    position: absolute;
  }
`;
