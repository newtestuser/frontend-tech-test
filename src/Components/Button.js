import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const ButtonStyle = styled.button`
  cursor:pointer;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  background-color: #00B3E3
  min-width: 80px;
  min-height: 35px;
  font-size:15px;
`;

const Button = props => {
  return <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>;
};

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;
