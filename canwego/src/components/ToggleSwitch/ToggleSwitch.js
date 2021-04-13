import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
/**
 * Ceci est mon premiers composant documenter dans une stories ='D
 *
 * ## Composant
 *
 * ```jsx
 * <ToggleSwitch></ToggleSwitch>
 * ```
 * ## Aperçu
 */

const ToggleSwitch = () => {
  const id = uuidv4();
  return (
    <Toggle>
      <ToggleCheckbox id={id} />
      <ToggleButton htmlFor={id} />
    </Toggle>
  );
};

export default ToggleSwitch;


const backgroundColorOff = "darkgray";
const backgroundColorOn = "dodgerblue";
const animationTime = "0.2s";

const Toggle = styled.div`
  position: relative;
  margin: 0.5rem;
`;
const ToggleButton = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background-color: ${backgroundColorOff};
  cursor: pointer;
  &::after {
    content: "";
    display: flex;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: ${animationTime};
  }
`;
const ToggleCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  z-index: 1;
  &:checked + ${ToggleButton} {
    background: ${backgroundColorOn};
    &::after {
      content: "";
      margin-left: 1.3rem;
      transition: ${animationTime};
    }
  }
`;
