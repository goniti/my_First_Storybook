import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * En-tête de l'application
 *
 * ## Composant
 *
 * ```jsx
 * <Header />
 * ```
 * ## Aperçu
 *
 */

const Header = ({ city, country }) => {
  return (
    <HeaderWapper>
      <City>{city}</City>
      <Country>{country}</Country>
    </HeaderWapper>
  );
};

Header.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
Header.defaultProps = {
  city: "Paris",
  country: "France",
};
export default Header;

const HeaderWapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1.5em;
`;
const City = styled.h1`
  color: hsl(60deg 1% 27%);
  text-transform: uppercase;
  font-size: 2.5rem;
  margin: 0em;
`;
const Country = styled.h2`
  color: hsl(36deg 63% 55%);
  margin: 0em;
`;
