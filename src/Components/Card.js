import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const CardStyle = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
`;

const Container = styled.div`
  padding: 2px 16px;
`;

const Card = props => {
  return (
    <CardStyle>
      <img src={props.image}></img>
      <Container>{props.children}</Container>
    </CardStyle>
  );
};

Card.propTypes = {
};

export default Card;
